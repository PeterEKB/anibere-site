import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  map,
  tap,
  BehaviorSubject,
  concat,
  concatAll,
  take,
} from 'rxjs';
import { InstagramPost } from 'src/app/core/interfaces/instagram-post';
import { InstagramApiService } from '../api/instagram-api.service';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  private _allPosts: InstagramPost[] = [];

  private $allPosts: BehaviorSubject<InstagramPost[]> = new BehaviorSubject<
    InstagramPost[]
  >([]);
  allPosts$: Observable<InstagramPost[]> = this.$allPosts;
  // $currentPosts: BehaviorSubject<InstagramPost[]> = new BehaviorSubject<
  //   InstagramPost[]
  // >([]);
  // currentPosts$: Observable<InstagramPost[]> = this.$currentPosts;

  constructor(private a_instagram: InstagramApiService) {}

  public getPosts(): Observable<InstagramPost[]> {
    this.init();
    return this.$allPosts;
  }
  private init() {
    this.a_instagram
      .getPosts()
      .pipe(
        take(1),
        tap((data: InstagramPost[] | null): void => {
      if (data === null) return;
          this._allPosts = this._allPosts.concat(data);
          this.$allPosts.next(this._allPosts);
        })
      )
      .subscribe();
  }
}
