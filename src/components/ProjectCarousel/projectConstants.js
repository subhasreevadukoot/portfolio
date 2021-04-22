import taskedApp1 from './../../assets/tasked-app.png';

import shopperPic2 from './../../assets/shopper2.png';
import shopperPic3 from './../../assets/shopper3.png';
import shopperPic1 from './../../assets/shopper1.png';
import climateApp1 from './../../assets/climate_app.png';
import climateApp2 from './../../assets/climate_app-2.png';
import climateApp3 from './../../assets/climate_app-3.png';
import climateApp4 from './../../assets/climate_app-4.png'
import taskedApp2 from './../../assets/tasked-2.png'
import taskedApp3 from './../../assets/tasked-3.png'
import postit2 from './../../assets/postit-2.png'
import postit1 from './../../assets/postit-1.png'
import blissfulcell1 from './../../assets/blissfulcell-1.png'
import blissfulcell2 from './../../assets/blissfulcell-2.png'
import blissfulcell3 from './../../assets/blissfulcell-3.png'
import blissfulcell4 from './../../assets/blissfulcell-4.png'
import dmat1 from './../../assets/dmat1.png'
import dmat2 from './../../assets/dmat2.png'
import dmat3 from './../../assets/dmat3.png'

export const projectDetails={
tasked:{name:'Tasked',
projectImage:[taskedApp1,taskedApp2,taskedApp3],
subTitleText:'Task Management App',
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
reason. Bringing in too many colours or images in the background confuses the user.>
In order to introduce fun and vibrancy to the application, the login page is developed with
animated images designed using Canva. Convenience of the users was the main concern while
developing the application. For easy access, logout link is provided in the top navigation bar
separately from other links in the side bar. A dashboard with all the task boards the user is
part of, is included so that users can see this list in one glance. The dashboard is an innovative
approach which is solely meant to increase the ease of UI. The counters including statistics
of tasks completed, tasks completed today by that user are also provided in separate
bordered boxes, so that users can easily know about these values every day, without clicking 
through the task boards which can be time consuming. 
Apart from these, the ability for users to see the task statistics in each task board is included so that there is more transparency. The
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
    'Google App Engine',
    'Django',
   'HTML, CSS, BootStrap'
],
sourceLink:'https://github.com/subhasreevadukoot/Tasked--Task-Management-App',
},

shopper:{name:'Shopper',
projectImage:[shopperPic1,shopperPic2,shopperPic3],
subTitleText:'E-commerce App',
descriptionText:'Shopper is an e-commerce platform built with MERN Stack. The project was built while learning through a PluralSight course to get an in-depth understanding of the best practices in Web App development.',
motivationText:"The main aim was to learn the steps involved in building a secure commercial e-commerce application. The project was taught as part of an online learning course by PluralSight",
designDecisions:['Add to cart functionality','Users can create profile', 'Payment endpoint -PayPal', 'User Authentication with Jason Web Tokens','Uses a seeder dataset','Password Encryption'],
techStack:[
    'React JS, Redux, Express JS, MongoDB',
    'JWT, Bcrypt',
    'React-Router',
    'MongoDB Atlas and Compass',
   'React-BootStrap, SASS'
],
sourceLink:'https://github.com/subhasreevadukoot/Shopper',

},

blissfulcell:{name:'Blissful Cell',
projectImage:[blissfulcell1,blissfulcell2,blissfulcell4],
subTitleText:'The happiness App',
descriptionText:`BlissfulCell is a platform built with basic web development tools and languages. The project was built by following complete Software Development Life Cycle and keeping in mind the needs of different use cases. The intended users of the application are NGO organizations, volunteers, individuals. Users can use the website with or without registering. Registered users get some extra features. The application can be used by all age groups, children can use the site under the monitoring of their parents.
The main focus while building this application was aesthetics, as the colors, look and feel matters to everyone, but matters more to people with mental health issues.`,
motivationText:"Today’s hectic, high-paced lifestyle may trigger the “fight-or-flight” response repeatedly over days, weeks, months or even years. With little time between “stressful” events, our nervous systems can’t repair properly and eventually are unable to manage what used to be low-stress events. Body responds by sending out dangerously high level of stress hormones. These are harmful in the long run. When the stress cycle continues without relief, more than emotions can seem to be out of control and the results can begin to manifest as physical discomfort. The project aims to contribute to the efforts to tackle mental health issues",
designDecisions:['Aesthetically appealing to the users', 'Fun activities like games to cater to younger audience','Regional music','Motivational quotes and stories'],
techStack:[
    'HTML,CSS',
    'JavaScript',
    'PHP',
    'BootStrap, SASS'
],
sourceLink:'https://github.com/subhasreevadukoot/Website-Project/tree/master/csproject'
},

postit:{name:'PostIt',
projectImage:[postit1,postit2,postit2],
subTitleText:'Place to chit-chat',
descriptionText:`POSTIt’ is a PaaS (Platform as a Service) application that is developed using Google App
Engine with Python version 2.7. The application serves as a simple version of social media
network for multiple users. This application allows users to login and logout, and also create
a profile for themselves with desired profile picture and information about them. In the
application users can also create posts containing images with a text caption. Users can follow
and unfollow each other. There is a timeline that shows the 50 posts of the people the user is
following and also his posts. Users can search for each other using their names and see their
profile page. The profile page contains all the posts of the user and information about the
user such as the profile picture, username, information about him and the number of
followers and following. Users can also post comments on the posts. The application is very
elegantly designed and resembles the UI of the familiar social networks. This application is
taking advantage of Blobstore of Google App Engine which allows the storage of binary large
objects [1]. `,
motivationText:`This web application was developed for the requirement of Master's in Big Data Management
and Analytics, Semester 2- Cloud Computing module. The aim of this assignment isto develop
a simplified replica of the social media platform Instagram as a PaaS application.`,
designDecisions:`The simplified replica of Instagram is named as ‘POSTIt, as it meaningfully represents the
intent of the application. The name was chosen after understanding that the users are more
interested in the kind of posts in their social media accounts. The main focus while building
this application was to utilize the beautiful design options that Bootstrap provides to give a
very elegant and familiar social media look and feel to the ‘POSTIt’ application. The design of
this web application is very familiar to the timelines and profile page layouts that users might
be familiar to in other social media platforms. Bootstrap borders and boxes are used for
improving the aesthetics of the application. The layout is designed with one top navigation
bar and two columns beneath structure, with the content below changing as different links
are being selected by the user, this choice was made to develop a consistent web application.
This decision was made to ensure that users has quick access to their profile pages to see their
posts and also the timeline to see the post of all the people they follow. Consistent template
is the key for giving a professional look to the application. Plain white background seemed to
be the best choice for a social media platform where images are posted. Images can be of any
colour thus it is necessary to have a background that doesn’t affect the image colours or
distract from the content. White background brings the user’s attention to the image and the
caption. The login page is developed with animated images designed using Canva to reduce
the mundane look of having a single login button in a plain white background. Appealing
images give the users an engaging feel, even though the kind of images users likes can be
really subjective.`,
techStack:[
    'Python',
    'Google App Engine',
    'Django',
   'HTML, CSS, BootStrap'
],
sourceLink:'https://github.com/subhasreevadukoot/POSTIt--Instagram-replica-Application-'
},

dmat:{name:'Data Mining Algorithms and Techniques Project',
projectImage:[dmat3,dmat1,dmat2],
subTitleText:'Analyzing diabetics data using Classification, Association Rule Mining and Clustering',
descriptionText:`The objective of this data mining process is to predict the risk of readmission of diabetes
patients into the 130 hospitals in the U.S. Effectiveness of any machine learning algorithm
relies on the efficient preprocessing techniques. Preprocessing techniques such as feature
encoding, feature selection, replacement of missing values, conversion of datatypes,
outliers, normalization, discretization, class imbalance etc. were analysed for
effectiveness on this dataset.
The readmission feature is converted to 1 for >30 and <30 and 0 for ‘NO’.
• ‘encounder_id’ and patient_nbr’ contains all 10176 unique values, thus they
are not useful for classification. ‘weight’ feature contains 97% missing values.
It is thus not useful for data mining and is removed from the dataset. 
Authors: A. Cronin and A. Siddig Griffith College 03/05/2020
‘payer_code’ has 40% missing values, ‘medical_speciality’ has 50% missing
values. This is also removed after applying feature selection algorithms.
‘examide’ and ‘citoglipton’ contains ‘No’ for all instances and hence removed.
Medications other than insulin, nateglinide is removed because their effect on
readmission is not significant. Feature selection techniques such as
ClassifierAttributeEval and CorrelationAttributeEval are applied to select the
features for the J48 classification algorithm. 18 features are selected. The
selected features are gender, age, admission_type_id, time_in_hospital,
num_lab_procedures, num_procedures, num_medications,
number_outpatient, number_emergency, number_inpatient, max_gluserum,
A1Cresult, metformin, nateglinide, insulin, change, diabetesmed, readmitted.
Normalization was not performed since the most of the attributes in the
dataset are distinct ids or nominal values.
Age is already discretized into categories from [0-10] to [10-100].
Data Type Conversion is performed using NumericToNominal and
StringToNominal to convert all the 18 attributes to Nominal values.
There are no outliers in the dataset.
 Applying SMOTE filter increased the performance of classification algorithm
J48 in this dataset dramatically. This is because the SMOTE filter reduces class
imbalance. 6 nearest neighbours were used. 
Three different Classification experiments were carried out by supplying the test set and
by varying the hyperparameters to see the performance of each model,
the detailed description of each model.Highest accuracy achieved with J48 is 70.0754 in third experiment.
This is achieved by using a pruned tree with minimum number of
instances per leaf(minNumObj) set to 3. It is observed that pruning mostly
reduces the complexity of the final classifier, reduce overfitting to increase
predictive accuracy. Apriori Algorithm with different parameters was used to perform
Association Rule Mining. A total of three experiments were carried out on
dataset. arff. `,
motivationText:`World Health Organization defines diabetes as “a chronic, metabolic disease
characterized by elevated levels of blood glucose (or blood sugar), which leads over time
to serious damage to the heart, blood vessels, eyes, kidneys, and nerves.” (WHO,2020).
According to Harvard Medical School, there are two types of diabetes: type 1 diabetes
(juvenile-onset diabetes) and type 2 diabetes (adult-onset diabetes). Type 1 diabetes is
an autoimmune disease that occurs to children and teenagers, with no cure. On the other
hand, adults with obesity or lack of physical activity are more vulnerable to type 2
diabetes (Harvard. 2020).
422 million people worldwide are suffering from diabetes, and the number of people with
Type 2 Diabetes has been increasing sharply over the years. Rozalina McCoy, M.D., an
internal medicine physician and endocrinologist at Mayo Clinic, says that adults with
diabetes have more chances of hospitalization and unplanned readmission. Hospital
readmission is defined as “an episode when a patient who had been discharged from a
hospital is admitted again within a specified time interval”. Centers for Medicare and
Medicaid Services (CMS) introduced Hospital readmission rates, as part of the Patient
Protection and Affordable Care Act (ACA) in the year of 2010 (Wikipedia, 2020). A new
research published in the Journal of General Internal Medicine, states that severe
dysglycemia (uncontrolled hyperglycemia - high blood sugar, or hypoglycemia - low
blood sugar) causes unplanned readmission in diabetes patients (ScienceDaily, 2017).
Readmission cause extreme financial burden on the diabetes patients and decrease the
reputation of the hospitals. Predicting readmissions can help in strategy making,
enhanced diagnosis, pattern prediction and thereby help the patients and hospitals alike. `,
designDecisions:['Predicted diabetes readmission risks through classification techniques and association rule mining after understanding the effects of diabetes in patients through literature review and detailed study of the Diabetes 130-US hospitals for years 1999- 2008 Data Set and its attributes',
    `Applied various feature selection methods in Weka to identify the best features
    and to vary the hyperparameters to find and evaluate the models with better
    performance and accuracy after training the model and testing on the trained model.
    `,`Implemented and evauated ensemble methods such as Bagging, Boosting in Weka
    Experimenter to understand the effect of these ensemble methods on the model with
    J48 algorithm.
    `,`Discovered patterns by generating association rules from the dataset using
    Association Rule Mining, Apriori Algorithms and to evaluate the rules from their
    confidence, support and lift.` ],
techStack:[
    'Weka',
    'Machine Learning Models',
    'Bagging Algorithms',
    'Boosting Algorithms'
],
sourceLink:'https://github.com/subhasreevadukoot/Data-Mining'
},



climateconvo:{name:'Climate Conversations and Visualizations',
projectImage:[climateApp1,climateApp3,climateApp4],
subTitleText:'Approach to contribute to combatting climate-change ',
descriptionText:`The ultimate goal of this project is to contribute to the Global Climate Action activities to achieve a limit of 1.5 degree of global warming [1] and to reduce greenhouse gas emissions, the project’s primary goal is based on the fact that communities around the world can be change makers if they are given a platform
Social media, especially Twitter is a great platforms to analyze public sentiments on climate change or green and sustainable living. However very little is done on this context. The project aims to be a great tool for fulfilling this commitment as it requires public to put effort. The visualization and interaction facility offered by the application makes this a great platform for the cause. 
This web application with climate sentiment analysis and climate data visualization along with a forum for interaction allows for public participation and collective efforts which are the need of the hour, this is not the time when the planet can afford the denial of climate change. 
We have developed a web application that can be a tool to mine public sentiments, visualize climate data patterns, develop strategies and moreover, this can be a forum where people concerned with the climate crisis can come together. 
Our research shows that ensemble learning Bagging with Linear SVC is the best performing algorithm with 76% accuracy followed Linear SVC and then  Logistic regression Naïve Bayes and AdaBoost. 
Twitter users do not always reflect the entire communities around the world. However, with approximately more than 338 million users worldwide comprising of government agencies, officials, nongovernmental organizations and other prominent persons, Twitter proves to be an extremely valuable resource for opinion mining. `,
motivationText:`Years of globalization and industrial revolution have tragically devastated the
environment and our sustainability practices have disappeared almost completely. 

The motivation for the project is the realization that the world is facing
an existential crisis and this project attempts to contribute to the global and regional
efforts to reduce destructive human intervention and promote constructive
collaboration.
Now more than ever, every bit of effort helps!!
`,
designDecisions:[`
The main idea of this project is to analyse sentiments of the public in the matters of
climate change, global warming and increasing natural hazards. This can contribute in
the efforts in saving the planet, by using the power of opinion mining to create
customisable solutions for different ecosystems and communities to tackle climate
change. Analysing Twitter sentiments is proven to be highly beneficial, given the fact
that it is widely utilised in understanding opinions, which may not be always possible
with surveys. Twitter is a massive pool of opinions, which when rightly analysed can
form the basis of many studies. The application also uses data visualization aspect to
make the public aware of the impact of climate crisis on our environment. There are
huge amounts of data on climate patterns, released by organizations that are freely
available, which forms the base of this project. The data can be visualized to show
ecologically fragile areas, loss of forest covers, pollution index, etc. which can be used
to develop strategies. The main advantage of this project is that the end-users can be
common men, who want to save the environment he lives in.
The communities using this application can identify how others feel about the planet
they live in, interact with each other using the forum built into this and then come up
with solutions such as planting trees, collecting and recycling plastic waste and urging
local governments or companies to take action to reduce pollution and emissions. UN
secretary-general António Guterres suggests that planting trees can dramatically
improve the climate patterns, as trees remove carbon dioxide from the environment and
release oxygen, reduces soil erosion, shelter various species and increase rainfall.
Initially, the project will focus on the climate data available in a particular country, and then connect residents
of the country, organizations and volunteers to start developing strategies to save the
fragile regions. Moreover, since the application has possibilities for interaction, this can
be used during a natural disaster such as floods, to organize and distribute resources to
those affected, and helps to arrange volunteers for rescue operations.
The application will have a dashboard that conveys the visualized climate data in a
meaningful format, which will be understandable to the public with the least knowledge.
of data analytics and climate science also. There is a forum where the public can
ask questions or start discussions based on the data that they see on the dashboard each
day. Each user will have to register with the application, and their general data such as
name, email and password will be collected for security reasons. The data will be stored
in a safe and private database.`,`The foundation of the application lies in the ability to differentiate sentiments into belief
and denial which is a challenging task given the unavailability of data and little prior
work. The application will use climate data- especially data on air quality index,
emission reports, loss of forest cover and so on that is released by World Bank, NASA,
and other organizations. Initially, the application will be released in Ireland, focusing
on the regional environment and ecologically fragile areas. The same model can be
applied to other parts of the world upon the successful completion of the regional
project. Environmental Indicators released by the Environmental Protection Agency of
Ireland will be of value to the project. Their website clearly shows the trend of
various emissions, air quality, waste management and so on. The users of the
application will be public of Ireland, non-governmental organizations working towards
a sustainable planet and other volunteers. 
`],
techStack:[
    'Python, Tableau',
    'MongoDB,Tweepy',
    'Machine Learning Models',
    'Scikit-Learn,NLTK',
   'Canvas JS','BootStrap, SASS'
],
researchObjective:['Compare the effectiveness of machine learning algorithms to analyse the sentiments of the public relating to man-made climate change','Develop a platform for climate data related dashboards and a forum for user interaction'],
sourceLink:'https://github.com/subhasreevadukoot/Climate-data-analytics',
}

}

