import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movieid:number;
  moviename:string;
  movieduration:string;
  numberOfLikes:number=0;
  classname:string;

  constructor(){
    this.movieid=1
    this.moviename="visvasam"
    this.movieduration="3.5"
    this.classname = "glyphicon glyphicon-heart"
   
  }

  likes(){
    this.numberOfLikes++;
  }
  
  showMovieDetails(mdetails:any){
     alert("Movie Details" + mdetails)
  }
  
}

  
  

