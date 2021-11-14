const express = require('express')

const showdown = require('showdown'),
	converter = new showdown.Converter(),
	text = `
	# **AWESOME CHEAT SHEETS**

## ![](https://github.com/Youth-Avenue-2021/cheat-sheet.github.io/raw/master/photos/gif.GIF)

#### **DESCRIPTION**

Cheat sheets are brief description of notes for a quick revision.
This project deals with various cheat sheets of and many more.
It not only covers programming languages but few keyboard shortcuts for various editors lik etc.
The list of library functions of C & Python is also attached.
Few snippets of codes are also added in HTML & CSS which you can directly use to build up your own projects.
Besides just viewing the sheets, the viewer can also download the required cheat sheets.

Some more links of pinterest are also added wherever required from where you can access a lot more cheat sheets.
A side menu bar is also adjoined to switch between different cheatsheets as per the user's convenience.
A search bar is also built to search for any random object the user wants to search.
This project will be helpful to anyone who is a coder/programmer.
Also, you can share it with your programmer friends to optimize their coding skills.

Tap on the following to directly go to the website:
**[Awesome Cheat Sheets](https://awesome-cheat-sheets.online/)**

#### **VISUALS AND USAGE**

---

![Download cheat sheets](https://github.com/Youth-Avenue-2021/cheat-sheet.github.io/blob/master/photos/section2.png?raw=true)

#### **INSTALLATION**

> hello friends i want to tell you something important things

---

As described earlier, the user can directly download the cheat-sheets from the section **DOWNLOAD ALL CHEAT SHEETS**.

No any specific platform is required to view the respective project.
We've tried our best to make the website look in its very precise manner irrespective of the device the user uses.
You can directly view our project by clicking **[Awesome Cheat Sheets](https://awesome-cheat-sheets.online/)**

#### **SUPPORT**

---

Everything added is correct to our best knowledge & still if you come across any error, feel free to suggest the corrections on the mail address as directed by the following option Gmail to abhidadhaniya23@gmail.com .
We appreciate every opinion.

#### **ROADMAP/FUTURE SCOPE**

---

We have tried to cover many topics but still considerably more cheat sheets will be added in the respective project in future as per the upgraded versions.

#### **CONTRIBUTION**

---

We are open to contributions.
Clone this repository by copying the following clone url (https://github.com/Youth-Avenue-2021/cheat-sheet.github.io.git). Edit the project with more cheat sheets which will be usable/helpful to other programmers.

#### **PROJECT BUILD-UP**

\`\`\`javascript
// Load the full build.
var _ = require("lodash");
// Load the core build.
var _ = require("lodash/core");
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require("lodash/fp");

// Load method categories.
var array = require("lodash/array");
var object = require("lodash/fp/object");

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require("lodash/at");
var curryN = require("lodash/fp/curryN");
\`\`\`

---

This project is built using HTML, CSS & Javascript.
All the information and data added in the project are either taken from google or pinterest or books of the respective topics.

---

---

##### HAPPY CODING :)

	`,
	html = converter.makeHtml(text);


const app = express()

const port = 3000

app.get('/', (req, res) => {
	console.log(html);
	res.end(html)
})

app.listen(port, () => {
	console.log(`Example app listening at http ://localhost:${port}`)
})