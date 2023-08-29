import { Component, Input } from '@angular/core';
import { InstagramPost } from '../../../core/interfaces/instagram-post';
import { InstagramService } from 'src/app/core/services/instagram.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
})
export class InstagramFeedComponent {
  @Input()
  number: number = 4;
  private _allPosts: InstagramPost[] = [];
  private $posts: BehaviorSubject<InstagramPost[]> = new BehaviorSubject<InstagramPost[]>([]);
  posts$: Observable<InstagramPost[]> = this.$posts;
  loadMorePossible: boolean = true;

  constructor(private s_instagram: InstagramService) {
    s_instagram.getPosts().subscribe((data: InstagramPost[])=>{
      this._allPosts = this._allPosts.concat(data)
      const tmp = this._allPosts.slice(0, this.number * 3 - 1)
      this.$posts.next(tmp)
    });
  }
  loadMore(){
      console.log(this.$posts.value.length + this.number, this._allPosts.length)
      const tmp = this._allPosts.slice(0, this.$posts.value.length + this.number)
      this.$posts.next(tmp)
  }
}
