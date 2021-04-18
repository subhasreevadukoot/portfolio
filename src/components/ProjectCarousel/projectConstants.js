import taskedApp from './../../assets/tasked-app.png';

import shopperPic from './../../assets/shopperPic.png';
export const projectDetails={
postIt:{name:'postIt',
projectImage:taskedApp,
descriptionText:'‘Tasked’ is a PaaS (Platform as a Service) application that is developed using Google App Engine with Python version 2.7. The application serves as a task management system for multiple users. This application provides users with login-logout and task creation services. In the application users can add task boards, which are collection of tasks and users to the database and modify details of existing task boards. The users can also invite other users to see and interact with boards they have created. The functionality to delete the entire board is available only for the created users. Users can also edit and delete tasks and mark them as complete. This application is taking advantage of parent-child relationships, KeyProperties of Google App Engine. Retrieval using keys is much faster than access using queries. Hence this increases the response time while retrieving values from the database. Models are designed and structured to allow for direct key access',
motivationText:"The project's main aim was to develop a task management system for multiple users as a PaaS application.",
designDecisions:`The application is named ‘Tasked’, as it conveys the use cases of the application in a single word. The logo is designed using Canva, and the logo narrates the purpose, the application is
developed for. A task management system should be user friendly and convenient, as it will
be utilised by multiple users of an organization. Hence, the design of this web application is
implemented by keeping these factors in mind. Bootstrap is used for improving the aesthetics
of the application. The layout is designed with one side navigation bar and the top navigation
bar, with the content below changing as different links are being selected by the user, this
choice was made to develop a consistent web application. Consistent template is really
important for systems like these, as it retains the focus of the users on the tasks rather than
the distracting and varying templates. Background is kept to be plain white for the same
reason. Bringing in too many colours or images in the background confuses the user.</p>
<p>
In order to introduce fun and vibrancy to the application, the login page is developed with
animated images designed using Canva. Convenience of the users was the main concern while
developing the application. For easy access, logout link is provided in the top navigation bar
separately from other links in the side bar. A dashboard with all the task boards the user is
part of, is included so that users can see this list in one glance. The dashboard is an innovative
approach which is solely meant to increase the ease of UI. The counters including statistics
of tasks completed, tasks completed today by that user are also provided in separate
bordered boxes, so that users can easily know about these values every day, without clicking 

through the task boards which can be time consuming.
</p><p> Apart from these, the ability for users
to see the task statistics in each task board is included so that there is more transparency. The
webpages are responsive, as users of an organization may access the application through
multiple devices to login to the task management system and to engage with their colleagues
and perform tasks. Another useful feature, is an icon to assign a task to a user later and not
necessarily with task creation. This feature was provided along with the edit and delete
buttons, because the creator of the task may not have chosen the user while creating the
task.
Colour choices for the application are finalised by referencing The Principles of Beautiful Web
Design by Jason Beaird. Dark green and red colours are avoided as much as possible because
they are the most common forms of colour blindness. A task management system should be
accessible to everyone, including people with colour blindness. Buttons are utilising multicolour palette; this is for the users who may feel that white colour is boring. For some use
cases, icons with tooltip text are utilised instead of text for the buttons, as visualizations are
comprehensible enough and looks more appealing for frequently performed actions. Tables
were selected to display the details of task boards, because it is an easy way to display
properly formatted content and it looks neat and clean, when contrasted to the white
background. A font stack is used in order to cater to a situation of unavailable fonts with
different browsers. The fonts that are chosen are Tahoma and Verdana. This is to maintain
the professional yet attractive look of the application.`,
techStack:[
    'Python',
    'Django',
    'Google App Engine',
   'HTML, CSS, BootStrap'
]
},
shopper:{name:'Shopper',
projectImage:shopperPic,
descriptionText:'Shopper is an e-commerce platform built with MERN Stack. The project was built while learning through a PluralSight course, there by giving me an in-depth understanding of best practices in Web App development.',
motivationText:"The project's main aim was to learn the steps involved in building a secure commercial e-commerce application",
Features:`Add to cart functionality,Users can create profile, Payment system, User Authentication with Jason Web Tokens,Uses a seeder dataset`,
techStack:[
    'React JS',
    'Redux',
    'MongoDB',
    'Node JS',
   'Express JS',
   'BootStrap, SASS'
]
}
}

