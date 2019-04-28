import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient}  from "@angular/common/http";
import { TotalPage } from "../total/total";


@Component({
  selector: 'page-try',
  templateUrl: 'try.html',
})
export class TryPage {

  data = Array.apply(null, Array());
  currentData:Info;
  currentIndex = 0;
  items = 1;
  score: number;
  val: any;
  subjects: any;
  currentSubject:any;
  questions:any;
  currentQuestions:any;
  questionIndex = 0;
  subjectIndex = 0;
  choice:any;
  selectedchoice:any;
  results = Array.apply(null,Array());

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    // this.getEnglish();
    this.getsubject();
    this.score = 0;
    this.answer;
  }

  answer(answer: any, correct: any){
    
    if(answer==correct){
      this.val = 'right';
    }else{
      this.val = 'wrong';
    }

  }

  submitresult(){
    this.http.post('http://localhost/let/api/submitresult.php',this.results)
    .subscribe(res => {
      
    },(err) => console.log(err));
  }

getquestions(subject_id){
  this.http.get('http://localhost/let/api/getquestions.php?sub_id='+subject_id)
   .subscribe(res => {
      this.questions = res;
      this.currentQuestions = this.questions[0];
      console.log(this.currentQuestions);
      this.getchoice(this.currentQuestions.question_id);
   });
}

getchoice(question_id){
  this.http.get('http://localhost/let/api/getchoice.php?question_id='+ question_id)
  .subscribe(res => {
     this.choice = res;
    //  this.currentQuestions = this.questions[0];
console.log(this.choice);
  });

}

  getsubject(){
  
    this.http.get('http://localhost/let/api/getsubject.php')
    
     .subscribe(res => {
          console.log(res);
        this.subjects = res;
        this.currentSubject = this.subjects[0];
        this.getquestions(this.currentSubject.sub_id);
     });

  }

  getEnglish(){
    this.http.get<data[]>('http://localhost/let/api/try.php').subscribe((successData) => {
        console.log(successData)
        successData.forEach(element => {
          this.data.push({
            gchoices: element.gchoices.split(","),
            gname:element.gname,
            gquestions:element.gquestions,
            grcno:element.grcno,
            greference:element.greference,
            gsub:element.gsub,
            ganswer:element.ganswer
          });  
        });
        this.currentData = this.data[this.currentIndex];
        console.log(this.currentData)

    }, (error) => console.log(error))
  }

  next(){
console.log(this.currentQuestions.answer);
console.log(this.selectedchoice);
    if(this.currentQuestions.answer == this.selectedchoice){
      this.score = this.score + 1;
      this.results.push({
        sub_id:this.currentSubject.sub_id,
        user_id:JSON.parse(localStorage.getItem("server_response")).id,
        question_id:this.currentQuestions.question_id,
        status:"Correct",
        exam_id:localStorage.getItem("exam_id")
      })
    }else{
      this.results.push({
        sub_id:this.currentSubject.sub_id,
        user_id:JSON.parse(localStorage.getItem("server_response")).id,
        question_id:this.currentQuestions.question_id,
        status:"Wrong",
        exam_id:localStorage.getItem("exam_id")
      })
    }
    console.log(this.subjects.length);
    console.log(this.subjectIndex);
    if(this.subjects.length -1 == this.subjectIndex){
console.log(this.results);
      this.submitresult();
    }
    if(this.questions.length -1 == this.questionIndex){
      this.subjectIndex ++;
      this.currentSubject = this.subjects[this.subjectIndex];
    }
    else{
      console.log(this.currentQuestions.question_id);
      this.questionIndex ++;
      this.currentQuestions = this.questions[this.questionIndex];
      this.getchoice(this.currentQuestions.question_id);
    }
   
    console.log(this.score);
      // this.items = this.items + 1;

      // if(this.val==='right'){
      //   this.score = this.score + 1;
      // }else{
      //   this.score = this.score + 0;
      // }
  
      // this.val = '';
  
      // this.currentIndex++;
      // this.currentData = this.data[this.currentIndex]
  
      // if(this.data[this.currentIndex] === undefined){

      //   this.navCtrl.setRoot(TotalPage, { totalscore : this.score, items: this.items });

      // }
  

  }
}

interface data{
  gchoices:string,
  gname:string,
  gquestions:string,
  grcno:number,
  greference:number,
  gsub:string,
  ganswer:number
}
interface Info{
  gchoices:string,
  gname:string,
  gquestions:string,
  grcno:number,
  greference:number,
  gsub:string,
  ganswer:number
}
