// content.ts
var htmlListItems = "\n <li>\n            <span class=\"emphasis\">Hypertext Markup Language (HTML)</span> is one of the three cornerstone languages\n            used in web development.\n          </li>\n\n          <li>\n            <span class=\"emphasis\">HTML</span> is used to create the <span class=\"emphasis\">structure</span> of a\n            webpage.\n          </li>\n\n          <li>\n            It is made up of <span class=\"emphasis\">elements</span> which work together to provide content and the basic\n            framework for all pages on\n            the web.\n          </li>\n\n          <li>\n            There are multiple types of elements including: <span class=\"emphasis\">text, image, header, and list</span>.\n          </li>\n\n          <li>\n            <span class=\"emphasis\">Elements</span> are also used to <span class=\"emphasis\">divide</span> the <span\n              class=\"emphasis\">content</span> on the page and to <span class=\"emphasis\">describe</span> the <span\n              class=\"emphasis\">content</span> to <span class=\"emphasis\">browsers</span> and other developers.\n          </li>\n\n          <li>\n            Common types of <span class=\"emphasis\">elements</span> used to <span class=\"emphasis\">divide content</span>\n            are: <span class=\"emphasis\">meta-related, content division, and semantic elements</span>.\n          </li>\n\n          <li>\n\n            The following element contains information or <span class=\"emphasis\">metadata</span> that helps the <span\n              class=\"emphasis\">browser</span> to <span class=\"emphasis\">render</span> the page correctly.\n\n            <ol>\n              <li type=\"i\">\n                <pre class=\"code\"><code>&lt;head&gt;</code></pre>\n              </li>\n            </ol>\n\n          </li>\n\n          <li>\n            The <span class=\"emphasis\">(body)</span> element represents the <span class=\"emphasis\">visible\n              content</span> shown to the <span class=\"emphasis\">user</span>.\n          </li>\n\n          <li>\n            Any content we want the <span class=\"emphasis\">end user</span> to see and <span\n              class=\"emphasis\">interact</span> with must be placed inside the <span class=\"emphasis\">\"body\"</span>\n            element.\n          </li>\n\n          <li>\n            The \"<span class=\"emphasis\">DOCTYPE html</span>\" at the top of the page is considered a \"<span\n              class=\"emphasis\">declaration</span>\".\n          </li>\n\n          <li>\n            <span class=\"emphasis\">\"Declarations\"</span> are used to tell the browser what document type it should\n            expect when opened.\n          </li>\n\n          <li>\n            <span class=\"emphasis\">\"DOCTYPE\"</span> is <span class=\"emphasis\">NOT</span> <span id=\"case-sense\">case\n              sensitive</span>, but <span class=\"emphasis\">HTML</span> elements <span class=\"emphasis\">are</span>.\n          </li>\n\n          <li>\n            \"Metadata\" is data about the webpage that the browser uses to effectively serve our webpage to users.\n          </li>\n\n          <li>\n            \"Metadata\" is not typically seen by users.\n          </li>\n\n          <li>\n            The \"style\" element defines the CSS styles associated with a website.\n          </li>\n\n          <li>\n            The \"base\" element defines the URL for a webpage.\n          </li>\n\n          <li>\n            The \"meta\" element defines metadata such as the character set, description, keywords, author, and viewport.\n          </li>\n\n          <li>\n            The \"script\" element embeds client-side scripts in the HTML document\n          </li>\n\n          <li>\n            The <span class=\"emphasis\">character set</span> element, sets the character encoding.\n\n            <ol>\n\n              <li type=\"i\">\n\n                <pre class=\"code\"><code>charset</code></pre>\n\n              </li>\n\n            </ol>\n\n          </li>\n\n          <li>\n            When the following attribute is set, the page will be in English.\n\n            <ol>\n\n              <li type=\"i\">\n\n                <pre class=\"code\"><code>lang=\"en\"</code></pre>\n\n              </li>\n\n            </ol>\n\n          </li>\n\n          <li>\n\n            The following element sets an HTTP header for content.\n\n            <ol>\n\n              <li type=\"i\">\n\n                <pre class=\"code\"><code>http-equiv</code></pre>\n\n              </li>\n\n            </ol>\n\n          </li>\n\n          <li>\n            The \"viewport\" element sets the default view for our webpage.\n          </li>\n\n          <li>\n            The \"section\" element divides content up into more organized sections based on thematic content.\n          </li>\n\n          <li>\n            The \"class\" attribute is used to define one or more classnames for an element.\n          </li>\n\n          <li>\n            The \"id\" attribute is a way to identify elements and select them.\n          </li>\n\n          <li>\n            Using the \"ul\" tag, creates an \"unordered list\" of items. This is a bulleted list.\n          </li>\n\n          <li>\n            Using the \"ol\" tag, creates an \"ordered list\". This is a numbered list.\n          </li>\n\n          <li>\n            Using the \"li\" tag, creates a \"list item\" for an unordered or ordered list.\n          </li>\n\n          <li>\n            If you put the following code in the HTML file it will block the\n            password from being viewed as it is typed.\n\n            <ol>\n\n              <li type=\"i\">\n\n                <pre class=\"code\"><code>input type=\"password</code></pre>\n\n              </li>\n\n            </ol>\n          </li>\n";
var cssListItems = "\n<li>\n            <span class=\"emphasis\">CSS</span> stands for \"<span class=\"emphasis\">Cascading Style Sheets</span>\".\n          </li>\n\n          <li>\n            CSS defines how webpage content is presented to users.\n          </li>\n\n          <li>\n            For example it defines things such as: webpage colors, aesthetics, visual, layout, and organization.\n          </li>\n\n          <li>\n            The three ways to style a webpage using CSS are: inline CSS, internal CSS, and external CSS.\n          </li>\n\n          <li>\n            When using an external CSS style sheet. You use a link element to link the HTML page to a separate CSS file.\n          </li>\n\n          <li>\n            When using \"external CSS\", the link is placed between the HTML files \"head\" elements.\n          </li>\n\n          <li>\n            A \"margin\" indicates how much space we want around the outside of an element.\n          </li>\n\n          <li>\n            A \"padding\" indicates how much space we want around the content inside an element.\n          </li>\n\n          <li>\n            The \".\" that precedes the \"card\" designates this as a class selector.\n          </li>\n\n          <li>\n            Any HTML element assigned to the class will gain whatever property assignments you defined in your CSS code.\n          </li>\n\n          <li>\n            The \"bow-shadow\" CSS property adds shadow effects around the elements frame.\n          </li>\n\n          <li>\n            Each box consists of margins outside the element, and the element's \"borders, padding, and content.\" This is\n            sometimes referred to as the \"CSS box model.\"\n          </li>\n\n          <li>\n            When trying to center something on a page, such as text or an image. It is best to use the\n            <span class=\"emphasis\">max-width</span> and <span class=\"emphasis\">min-width</span> commands in addition to\n            the <span class=\"emphasis\">width</span>\n            command if you want to really get more precise.\n          </li>\n";
var gitListItems = " \n        <li>\n          The \"<span class=\"emphasis\">git status</span>\": command <span class=\"emphasis\">checks</span> what <span\n            class=\"emphasis\">branch</span> we are <span class=\"emphasis\">currently</span> on.\n        </li>\n\n        <li>\n          The \"<span class=\"emphasis\">git checkout -b branch-name</span>\": command <span class=\"emphasis\">creates</span>\n          a <span class=\"emphasis\">new</span> branch and <span class=\"emphasis\">switches</span> to it.\n        </li>\n\n        <li>\n          The <span class=\"emphasis\">git add .</span> command is used to stage <span class=\"emphasis\">all changes</span>\n          <span id=\"git-add-1\">(new and modified files)</span> in the <span class=\"emphasis\">current directory</span>\n          and <span class=\"emphasis\">subdirectories</span>.\n        </li>\n\n        <li>\n          The <span class=\"emphasis\">git add -A</span> command (<span class=\"emphasis\">\"A\"</span> stands for <span\n            class=\"emphasis\">\"all\"</span>) stages <span class=\"emphasis\">all changes</span> in the entire working\n          directory (<span id=\"git-add-2\">new files, modified files, and deletions</span>).\n        </li>\n\n        <li>\n          The \"-m\": flag to associate a message with our commit.\n        </li>\n\n        <li>\n          The <span class=\"emphasis\">git branch -b branch name</span> command creates a branch, but does not check you\n          out to it.\n        </li>\n";
var gitSyncListItems = " \n<li>\n          When you are on or in the <span class=\"emphasis\"><em>main</span></em> branch <span\n            class=\"emphasis\">locally</span>. We have a\n          requirement to work on a <span class=\"emphasis\"><em>feature</span></em> or separate branch.\n        </li>\n\n        <li>\n          Checkout to a new branch with the git checkout -b <span class=\"emphasis\">branch name</span> command.\n        </li>\n\n        <ol type=\"I\">\n\n          <li>\n            This will create and checkout to the new <span class=\"emphasis\"><em></em>branch name</em></span>.\n          </li>\n\n        </ol>\n\n\n        <li>\n          Do the <span class=\"emphasis\"><em>commit</em></span> workflow as needed in this stage. This includes\n          <span class=\"emphasis\"><em>pushing</em></span> those <span class=\"emphasis\">commits</span> to GitHub.\n        </li>\n\n        <ol type=\"I\">\n          This means do either <span class=\"emphasis\">git add .</span> or <span class=\"emphasis\">git add -A</span>.\n        </ol>\n\n        <li>\n          Sync with GitHub with the <span class=\"emphasis\">git push</span> command.\n        </li>\n\n        <ol type=\"I\">\n          <li>\n            Warning this will prompt you with the following suggestion example:\n          </li>\n\n        </ol>\n\n        <ol type=\"i\">\n          <li>\n            <span class=\"emphasis\">push --set-upstream origin \"branch name\"</span>.\n          </li>\n\n          <li>\n            Now we will have a synced connection between <span class=\"emphasis\"><em>GitHub</em></span> and our\n            <span class=\"emphasis\"><em>local</em></span> branch.\n          </li>\n\n        </ol>\n\n        <li>\n          Work on your files/directories <span class=\"emphasis\"><em>locally</em></span>.\n        </li>\n\n        <li>\n          Create a <span class=\"emphasis\">Pull Request (PR)</span> in GitHub\n        </li>\n\n        <li>\n          Then do a <span class=\"emphasis\">Merge Pull Request</span>.\n        </li>\n\n        <li>\n          On the <span class=\"emphasis\"><em>local</em></span> device. If we are still not in <span\n            class=\"emphasis\"><em>main</em></span> branch,\n          we need to <span class=\"emphasis\"><em>checkout</em></span>.\n        </li>\n\n        <ol type=\"I\">\n\n          <li>\n            To checkout to the <span class=\"emphasis\"><em>main</em></span> branch, use the <span class=\"emphasis\">git\n              checkout main</span>\n            command.\n          </li>\n\n        </ol>\n\n        <li>\n          Then we need to bring all the changes living in GitHub remote/main branch to our local machine using the\n          <span class=\"emphasis\">git pull</span> command.\n        </li>\n\n        <li>\n          When you finish, rinse and repeat as needed.\n        </li>\n";


function appendHtmlContent() {
    var htmlList = document.querySelector('.card:nth-of-type(1) .list-items');
    if (htmlList) {
        htmlList.innerHTML += htmlListItems;
    }
}
function appendCssContent() {
    var cssList = document.querySelector('.card:nth-of-type(2) .list-items');
    if (cssList) {
        cssList.innerHTML += cssListItems;
    }
}
function appendGitContent() {
    var gitList = document.querySelector('.card:nth-of-type(3) .list-items');
    if (gitList) {
        gitList.innerHTML += gitListItems;
    }
}

function appendGitSyncContent() {
    const gitOl = document.getElementById('git-ol');
    if (gitOl) {
        gitOl.innerHTML += gitSyncListItems;
    }
  }

document.addEventListener('DOMContentLoaded', appendHtmlContent);
document.addEventListener('DOMContentLoaded', appendCssContent);
document.addEventListener('DOMContentLoaded', appendGitContent);
document.addEventListener('DOMContentLoaded', appendGitSyncContent);
