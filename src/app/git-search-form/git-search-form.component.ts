
import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{GitSearchService} from '../git-search.service';
import {Repo} from '../repo';
import{User} from '../user';

// import {Git-search} from '../git-search-form'

@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  providers: [Gitsearchservice],
  styleUrls: ['./git-search-form.component.css']
})
export class Gitsearchformcomponent implements OnInit {
  user:User;
  repo:Repo;
  repoArray:any[];
 public username:string;

  constructor(private GitSearchForm:GitSearchService) { }

  searchProfile() {
    this.gitsearchform.updateuser(this.username);
    this.gitsearchform.userRequest();
    this.GitSearchform.repoRequest();
    this.repoArray = this.user.repoArray;
  }

  ngOnInit() {
    this.gitprofile.profileRequest();
    this.user = this.profile.user;

    this.gitprofile.repoRequest();
    this.repoArray = this.gituser.repoArray;
  }

}
