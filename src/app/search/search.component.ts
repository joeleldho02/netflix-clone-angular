import { Component } from '@angular/core';
import { TheMovieApiService } from '../the-movie-api.service';
import { Meta, Title } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service: TheMovieApiService,private title: Title,private meta:Meta){
    this.title.setTitle('Search movies - Netflix');
    this.meta.updateTag({name:'description', content:'search here movies like avatar,war etc'});
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie');
          this.searchResult = result.results;
      });
  }
}
