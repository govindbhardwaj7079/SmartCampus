
<h2> Proxy Free QR Based Attendance </h3>

Site is hosted at URL: https://digiicampus.netlify.app/
<br/>

<strong>This is hackathon project and won the National Level Hackathon by Pragyaa at SGGS Engineering college Nanded, Maharashtra (India) by beating up multiple teams across the country. My team name was Phantom Troupe and I was the team leader too. </strong>

<h3>Problem Statement: Digitalization of College Campus</h3>

<h3>Description: </h3>

Despite teh advancement of technology many college campuses still rely on paper-based processes. this not only results in inefficiencies but also increases workload for staff and paper wastage. To address this, a web application needs to be developed that can digitilise various college processes making them paperless, efficient and less time-consuming.

The current paper-based system poses seevral challanges such as manual efforts and data loss. In addition, it also makes it difficult for students and faculty to access important information quickly and asily, which leads to delays in the processes and creates incovenience for everyoune involved. 

Therefore, we have to build a web applicaion that can simplify college processes, reduce paper usage and increase effciency.

<h3>Solution: </h3>

We developed Proxy Free QR Based Attendance web application where no one can give attendance of other students. So, teacher don't have rely on paper for attendance and it will be more convient for both students and teachers too.

<h4>How it works? </h4>
1. First by using google authentication, user have to login and then he/she will have access to attendance section. <br/>
2. There will be 2 sections, one for student and other for teacher. <br/>
3. Teacher can add stduent with branch assigned to him with proper form validation. (Each student will only be added once and that's for first time and it will be stored in firebase for future use). <br/>
4. After students are added teacher can create attendance for their respective subjects. <br/>
5. Once attendance is created modal will be open and there will QR code and stdudent name on modal. <br/>
6. After each 20 seconds QR code will change and also student name will change too for next stduent's attendance. (Here after each 20 seconds QR code will change and it will unique for each time, so no other student can share that QR code with others to maintain proxy). <br/>
7. From student side, student can use scanner from site to scan QR code and make his/her attendance.  <br/>
8. After marking attedance, within a seconds student will logout from student section.(So, student won't stick on site to mark other student's attendance). <br/>


<h2> Setup Guide </h2>

Open a code and run following command in terminal (Make sure that Node JS is already installed)

<code> npm install </code>

To run the app use command

<code> npm start </code>


