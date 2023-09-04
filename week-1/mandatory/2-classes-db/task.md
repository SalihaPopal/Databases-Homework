# Class Database

## Submission

Below you will find a set of tasks for you to complete to consolidate and extend your learning from this week.  You will find it beneficial to complete the reading tasks before attempting some of these.

To submit this homework write the correct commands for each question here:

```sql


```

When you have finished all of the questions - open a pull request with your answers to the `Databases-Homework` repository.

## Homework

If you haven't completed all the exercises from this lesson then do that first.

### Tasks
1.  Which rooms have a rate of more than 100.00?

select room_type, rate from rooms where rate > 100;

2.  List the reservations that have a checkin date this month and are for more than three nights.

select * from reservations where extract(month from checkin_date) = extract(month from current_date) and checkout_date - checkin_date > 3;

3.  List all customers from cities that begin with the letter 'M'.

select * from customers where city like 'M%';


Insert some new data into the room_types and rooms tables, querying after each stage to check the data, as follows:

4.  Make a new room type of PENTHOUSE with a default rate of £185.00

insert into room_types (room_type, def_rate) values('PENTHOUSE', 185);

5.  Add new rooms, 501 and 502 as room type PENTHOUSE and set the room rate of each to the default value (as in the new room type).

insert into rooms (room_no, room_type, rate) values(501, 'PENTHOUSE', 185), (502, 'PENTHOUSE', 185);

6.  Add a new room 503 as a PREMIER PLUS type similar to the other PREMIER PLUS rooms in the hotel but with a room rate of 143.00 to reflect its improved views over the city.

insert into rooms (room_no, room_type, rate) values(503, 'PREMIER PLUS', 143);

Using what you can learn about aggregate functions in the w3schools SQL classes (or other providers), try:

7.  The hotel manager wishes to know how many rooms were occupied any time during the previous month - find that information.

select count(room_no) as occupied_rooms
from reservations
  where checkin_date <= date_trunc('month', current_date) - interval '1 day'
  and checkout_date >= date_trunc('month', current_date - interval '1 month');


8.  Get the total number of nights that customers stayed in rooms on the second floor (rooms 201 - 299).

select sum(checkout_date-checkin_date) as nights from reservations where room_no between 201 and 209;

9.  How many invoices are for more than £300.00 and what is their grand total and average amount?

select count(*), sum(total), avg(total) from invoices where total > 300 ;

10.  Bonus Question: list the number of nights stay for each floor of the hotel (floor no is the hundreds part of room number, e.g. room **3**12 is on floor **3**)

select count(checkout_date - checkin_date) as nights from reservation where room_no between 101 and 503 group by floor order by floor_no;

select floor(room_no / 100) as floor_no, sum(checkout_date - checkin_date) as nights from reservations where room_no between 101 and 503 group by floor(room_no / 100) order by floor_no;