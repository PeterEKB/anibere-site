import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, take, tap } from 'rxjs';
import { InstagramPost } from 'src/app/core/interfaces/instagram-post';

@Injectable({
  providedIn: 'root',
})
export class InstagramApiService {
  private readonly ACCESS_TOKEN =
    'EAARpfvjnUqUBO7A6mKhcf0UFcowLzIldZB96izkPPDmQUwAF6jJHvN2kt1TDJZB4bmOFHEg5zq2oZCaJt0AKdNEtEU5XKK0XKaN4QMW7KCZAO76erTMmCYIfV3V513vct6cKZAVwi6at1gcge2g1ehZBBS4m7lRyPETG71XwJODU1dwih3giOlPQxL';
  private readonly fields = 'media_url,media_type,permalink,caption';
  private readonly limit: number = 31;
  private readonly API_URL = `https://graph.facebook.com/v17.0/17841402370735134/media?fields=${this.fields}&limit=${this.limit}&access_token=${this.ACCESS_TOKEN}`;
  private calls: number = 0;
  private _next: string | undefined = undefined;

  constructor(private http: HttpClient) {}

  private initPosts() {
    return this.http.get<InstagramResponse>(this.API_URL).pipe(
      take(1),

      tap((res: InstagramResponse) => {
        this.calls++;
        this._next = res.paging.next;
      }),
      map((res: InstagramResponse): InstagramPost[] | null => {
        return res.data ? res.data : null;
      })
    );
  }
  private getMorePosts() {
    return this.http.get<InstagramResponse>(this._next!).pipe(
      take(1),

      tap((res: InstagramResponse) => {
        this._next = res.paging.next;
      }),
      map((res: InstagramResponse): InstagramPost[] | null => {
        return res.data ? res.data : null;
      })
    );
  }

  public getPosts(reset: boolean = false): Observable<InstagramPost[] | null> {
    if (reset) return this.initPosts();
    return this.calls
      ? this.getMorePosts()
      : this.initPosts();
  }
}

interface InstagramResponse {
  data: InstagramPost[];
  paging: Paging;
}
interface Paging {
  next: string;
  previous: string;
}
