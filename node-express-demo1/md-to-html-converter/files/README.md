There are lots of hosting services available to publish websites.
Github is a free hosting service provider. You can publish your front-end website using github pages.
Here, I will explain you how to publish your github website for free in easy steps.

Before you host your website on github first of all you have to learn about git. Git is a open source version control system to track your code history and changes. Git is created by Linus Torvalds (creator of linux).

You can upload your codes in github using git terminal or any other graphical user interface like sublime merge, Github desktop and also you can use vscode to track your code using git.
Here is the blog post which is written by me on git.

If you feels hard to remember all git commands then you should use all commands cheat sheet [PDF](https://education.github.com/git-cheat-sheet-education.pdf).

## How to upload website code on github

### Upload files using git

First of all you need to create an account on github. So if you don't have any github account then you need to create it right now.
Now, you need to create a repository by clicking on + icon which is shown in below picture.

![hello](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7_O92CTZznLf0MDTVh3Y0P2npYc50rs3GQ&usqp=CAU)

Github will ask you about repository name and visibility of repository.

First of all let's set repository name. You need to strictly follow this rules to publish website from github.
Your repository name must be unique and follow this sequence **`name.github.io`**
Example : if your project name is **color-game** then you should set repository name `color-game.github.io`

You have to choose unique name otherwise github will not allow you to create repository. Once you create your repository and published your code in that repository then your URL of website is like `https://<username>/<project-name>/github.io/`

Once you pass and select the name of your repository then you have to choose **public repository** insted of private repository because when you want to publish your website you have to set your code as public repository.

![enter image description here](https://developers.sap.com/tutorials/webide-github-create-git-repo/_jcr_content.github-proxy.1563441917.file/p2_4.png)

Now, click on create repository and your repository will be created. Once you will create repository, you will able to see below picture.

![enter image description here](https://curriculum-content.s3.amazonaws.com/web-development/enough-git-for-learn-co/github_quick_setup.png)

Now, you have to click on marked copy button and it will copy the ssh URL of your repository. This URL called your remote repository URL.
You have to open git bash by clicking right click in your website code folder. Make sure you are inside your code folder and you have to keep **`index.html`** outside any folder **(not from this folder)**.

![enter image description here](https://i.stack.imgur.com/7BI04.png)

> Before we use git commands make sure you have already set ssh key of your computer in github.

Now, you have to use basic commands of git. If you good at git commands then not any problem but if you don't know about basic git commands then first you have to learn all those commands.

Here, I will show some basic commands to upload files and folder to remote repository (GitHub Repository). This is called a local repository.

First of all we need to initialize repository using

```bash
git init
```

After initializing repository, we have to stage files and folders using

```bash
git add .
```

After staging all files and folder, we have to commit files from staging area. So that git can understand we have finally commit changes.

```bash
git commit -m "initial commit"
```

In inverted commas you can write any message about what you have change in code.

after commit we have to push our changes or files & Folder to local repository.

But, before we use the push command we need to add that remote URL to git so that out git can understand about where we want to push our files (at which location).

To add remote URL we need to run this command

```bash
git remote add origin <remote url>
```

Don't forget to replace your remote repository url in above command like

```bash
git remote add origin git@github.com:unknown/demo.git
```

Once we add remote origin now we have to use push command to push all data on out github repository.

```bash
git push -u origin master
```

Once we don't this all process then we able to see our files and folder on github repository. If it's now showing your files and folder then you have to refresh your repository page.

Once again, make sure you keep `index.html` outside the folder so github pages can easily check `index.html` file to publish our website.

Now, you have to go repository setting and go to github pages. If you don't able to find github pages you can search github pages.

![enter image description here](https://i.stack.imgur.com/4upKT.png)

In github pages you have to select master branch. After selecting master branch also you have to mark below option to get secure connection in your website.

![enter image description here](https://docs.github.com/assets/images/help/pages/enforce-https-checkbox.png)

Mark this Enforce HTTPS to get secure connection for your website.

If you want to add any custom domain then you can add that also in custom domain but for now, we can keep it simple and default pages link.

Now, click on save button and it will show you website is publishing at **`<website-link>`**.

> **When you click on that link you will see 404 not found error but don't worry github will generate your website page shortly. (around 20 - 25 min OR maximum 2 - 3 hours).**

If you will not able see your published website you probably made any mistake.

## Conclusion

We discussed about how we can publish our front-end website using github pages. Github is a free hosting service provider by microsoft. We don't need to purchase money to host code of our website and we can easily host our website in github completely for free. I think it's the best platform to host front-end websites.
