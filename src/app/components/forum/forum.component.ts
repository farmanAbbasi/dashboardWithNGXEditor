import { Component, OnInit} from '@angular/core';
import { dog } from './datadog';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  private noOfItemsToShowInitially = 5;
  dogs = dog;
  private itemsToLoad = 3;
  public itemsToShow = dog.slice(0, this.noOfItemsToShowInitially);
  public isFullListDisplayed = false;
  j = 0;
  thought:''; 
 
  thoughtToShare = [];

  likeButton = 'likes';
  postButton = 'click to add comment';

  dataContent = [];
  found: boolean;
  toShare = false;
  shared = true;
  id = 1;
  i: number;
  likesCount = 0;

  jj = 0;
  commentLength = 0;
  value = 'Clear me';
  commentCount = 0;
  text: string;
  selected = 'post';
  flagForPost = true;
  flagForPoll = false;
  arrayOption1 = '';
  arrayOption2 = '';
  arrayOption3 = '';
  arrayOption4 = '';
  arrayOptionAll = [];
  indexArrayOptionAll = 0;
  optionsToShare = [];
  ioption = 0;
  pollQuestion = '';
  pollShareFlag = false;

  checkedBool = false;
  checkedBoolArray = [];
  oRadio = [];
  o1 = false;
  o2 = false;
  o3 = false;
  k = 1;
  check = 0;

  constructor(private postService:PostService) { }
  ngOnInit() {
  }
  onThoughtKeyUp(event: any) {
    this.thought = event.target.value;
    console.log('firedThrow');
  }
  iii = 0;
  sharePoll() {
    if (this.pollQuestion.length !== 0) {
      this.optionsToShare[this.iii] = this.pollQuestion;
      this.arrayOptionAll[(this.iii * 4) + 0] = this.arrayOption1;
      this.arrayOptionAll[(this.iii * 4) + 1] = this.arrayOption2;
      this.arrayOptionAll[(this.iii * 4) + 2] = this.arrayOption3;
      this.arrayOptionAll[(this.iii * 4) + 3] = this.arrayOption4;
      console.log(this.arrayOptionAll[0]);
      console.log(this.arrayOptionAll[1]);
      console.log(this.arrayOptionAll[2]);
      console.log(this.arrayOptionAll[3]);
      this.iii++;
      //fifth place pe multiple or singl option true ya false save hogi
      this.pollShareFlag = true;
    }
  }
  deleteThought() {
    this.thought = '';
    this.arrayOption1 = '';
    this.arrayOption2 = '';
    this.arrayOption3 = '';
    this.arrayOption4 = '';
  }
  
  shareThought() {
    if (this.shared === true && this.thought.length !== 0) {
      this.toShare = true;
      if (this.toShare === true) {
        this.thoughtToShare[this.j] = this.thought;
        this.j = this.j + 1;
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
       //sending to service
       
       this.postService.sendPostData(this.thought);//postService is to be injected in the constructor
      // thought is received inside the value postData

        this.deleteThought();
      }
    }
  }
  onScroll() {
    console.log('fired');
    if (this.noOfItemsToShowInitially <= dog.length) {
      this.noOfItemsToShowInitially += this.itemsToLoad;
      this.itemsToShow = dog.slice(0, this.noOfItemsToShowInitially);
      console.log('scrolled');
    } else {
      this.isFullListDisplayed = true;
    }
  }
}
