# modules
I am building this app to help me integrate future milestones easily with the power of posting
The modules:
1) TopBar: an rfc that monitors the state of the topbar
2) Terminal:
    An area that accepts (Post)'s and show
    State: post list
3) Post:
    a single post. I am planning to make it parse a json file and read the information 
    it must show
    states:
        picture
        description
        date
        link_to_service

Contact:
tbd


I will create a file with all the posts (json):
[
    post#:
        {
            picture_path: "",
            description: "",
            date: "",
            link_to_service: ""
        }
]