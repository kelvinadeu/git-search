import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  http: HttpClient;
  username: string;
  user: string;
  repos : string;
  repoArray: any;
  BaseUrl = environment.BaseUrl;
  FinalUrl = environment.FinalUrl;

  constructor(private http: HttpClient) {
    this.username = "kelvinadeu";
    this.user = new User("", "", "","","","","","","",0,0);
    this.repo = new Repo("", "", "");
    this.repoArray = [];
    this.http = https;
    profilename = "";
  }

  userRequest() {
    interface ApiResponse {
      name: string;
      login: string;
      company: string;
      location: string;
      avatar_url: string;
      bio: string;
      hireable: string;
      blog: string;
      email: string;
      followers: number;
      following: number;
      public_gists: number;
      public_repo: number;
      html_url: string;
    }

    let user = new User("", "", "");
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.BaseUrl + this.profilename + this.FinalUrl).toPromise().then(response => {
        this.user.name = response.name;
        this.user.login = response.login;
        this.user.company = response.company;
        this.user.location = response.location;
        this.user.avatar_url = response.avatar_url;
        this.user.bio = response.bio;
        this.user.hireable = response.hireable;
        this.user.blog = response.blog;
        this.user.email = response.email;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.public_gists = response.public_gists;
        this.user.public_repo = response.public_repos;
        this.user.html_url = response.html_url;
        resolve()
        console.log("Working!");
        console.log(this.profile);
      },
        error => {
          console.log("Error occured")
          reject(error);
        })
    })
    return promise;
  }

  repoRequest() {
    this.repoArray = [];
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
    }
      let repo= new Repo('', '', '');
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.BaseUrl + this.username + /repos + this.FinalUrl).toPromise().then(response => {
        for (let repo of response) {
          this.repo.name = repo.name;
          this.repo.html_url = repo.html_url;
          this.repo.description = repo.description;
          this.repoArray.push(this.repo);


        }
        console.log(this.repoArray);

      },
        error => {
          console.log("Error occured");
        })
      })

    return repo;
  }

  // updateuser(username: string) {
  //   this.username = username;
  // }



     let repos = [];

    let repo = new Repository("","",0,0,"","",0);
    let promise = new Promise((resolve,reject) => {
      this.http.get<ApiData>('https://api.github.com/users/'+ name +'/repos?access_token=2e5e14352a2394ac3049e179518b438a9a94968b').toPromise().then(response => {
        for(let i = 0; i < response["length"];i++) {
          let newRepo = new Repository("","",0,0,"","",0)
          newRepo.name = response[i]["name"];
          newRepo.forks = response[i]["forks"];
          newRepo.language = response[i]["language"];
          newRepo.stars = response[i]["stargazers_count"];
          newRepo.watches = response[i]["watchers"];
          newRepo.url = response[i]["html_url"];
          repos.push(newRepo)
        }
      }, err => {
        console.log("Repo not found");
        reject(err);
      })
    })
    return repos;
  }
