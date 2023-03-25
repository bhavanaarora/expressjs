let mysql=require('mysql');
let con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mydb'
});
con.connect(function(error){
    if(error)throw error;
    console.log("connected");
   
    // con.query("create database mydb",function(err,result){
    //     if(err) throw err;
    //     console.log("database created");
    // });
    
    
   let sql;

//sql='select * from signup';
// sql="create table customer(name varchar(50),address varchar(50))";
// sql="insert into customer(name,address) values('harshita','abc')";
//sql="select * from customer where address like 'a%'";
//sql="select * from customer order by name";
//sql="delete from customer where name='shyam'";
//sql="drop table customer";
// sql="create table customer (name varchar(255),address varchar(255))";
// sql="update customer set name='sunita' where name='sita'";
// sql="select * from customer LIMIT 5"
// sql="create table product(id varchar(11), name varchar(50))";
// sql="insert into user (id,name,favorite_product) VALUES('2','sorabh','camera')";
 //sql="select user.id,user.name from user join product on user.favorite_product=product.name";
// sql="delete from customer where name=''";


//sql="create table employee(empId varchar(11), firstName varchar(50),lastName varchar(50),orderDate DATE,photo BLOB)";

//sql="create table orders(orderId varchar(11),custId varchar(11),empId varchar(11),orderDate DATE,shipperId varchar(11))";
//sql="insert into employee(empid,firstName,lastName,orderDate,photo) VALUES ('3','lever','jane','2022-11-21','img2.png')";
//sql="insert into orders(orderId,custId,empId,orderDate,shipperId) VALUES('10310','77','8','2022-02-11',2)";
//sql="select orders.orderId,employee.firstName,employee.lastName from orders Right JOIN Employee on orders.empId=employee.empId ORDER BY orders.orderId";

//sql="create table student(rollNo smallint(11),marks1 smallint(11),marks2 smallint(11))";
//sql="insert into student(rollno,marks1,marks2) VALUES (10,94,70)";
//sql="select MAX(marks1) from student";
//sql="select MIN(marks1) from student";
//sql="select count(marks1)from student";
//sql="select avg(marks2) from student";
//sql="select sum(marks2)from student";
//sql="select marks1 from student order by marks1 desc";
//sql ="create table student1(rollno varchar(11),name varchar(50),address varchar(50),age int)"
//sql="insert into student1(rollno,name,address,age)VALUES('5','ansh','mumbai',28)";
//sql="create table studentcourse(courseid varchar(11),rollno varchar(11))"
//sql="insert into studentcourse(courseid,rollno)VALUES('c005','7')";
//sql="select student1.rollno,student1.name,studentcourse.courseid from student1 join studentcourse on student1.rollno=studentcourse.rollno";
//sql="select student1.rollno,student1.name,studentcourse.courseid from student1 LEFT join studentcourse on student1.rollno=studentcourse.rollno";
//sql="select student1.rollno,student1.name,studentcourse.courseid from student1 RIGHT join studentcourse on student1.rollno=studentcourse.rollno";
sql="select student1.rollno,student1.name,studentcourse.courseid from student1 left join studentcourse on student1.rollno=studentcourse.rollno union all select student1.rollno,student1.name,studentcourse.courseid from student1 right join studentcourse on student1.rollno=studentcourse.rollno";

con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
});

});


