console.log("now united");

import express from 'express';
import 'dotenv/config';
const app = express();
app.use(express.json());
const github_data={
  "login": "AnushkaSinha15",
  "id": 70542607,
  "node_id": "MDQ6VXNlcjcwNTQyNjA3",
  "avatar_url": "https://avatars.githubusercontent.com/u/70542607?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AnushkaSinha15",
  "html_url": "https://github.com/AnushkaSinha15",
  "followers_url": "https://api.github.com/users/AnushkaSinha15/followers",
  "following_url": "https://api.github.com/users/AnushkaSinha15/following{/other_user}",
  "gists_url": "https://api.github.com/users/AnushkaSinha15/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AnushkaSinha15/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AnushkaSinha15/subscriptions",
  "organizations_url": "https://api.github.com/users/AnushkaSinha15/orgs",
  "repos_url": "https://api.github.com/users/AnushkaSinha15/repos",
  "events_url": "https://api.github.com/users/AnushkaSinha15/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AnushkaSinha15/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2020-08-31T19:37:23Z",
  "updated_at": "2026-11-21T09:57:27Z"
}

app.get('/',(req,res)=>{
    res.send("lolo")
})

app.get('/twitter',(req,res)=>{
    res.send("ayooooo prettyyy")
})

app.get('/github',(req,res)=>{
    res.json(github_data);
})

app.get('/login',(req,res)=>{
    res.send('<h1>ehehhehehheheh</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`hiiii, server is working at ${process.env.PORT}`);
})