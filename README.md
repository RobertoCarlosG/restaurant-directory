# React + Vite


Problem 2 - Programming: In this problem, you are asked to develop a web application using 
Python and Microsoft SQL Server. The software architecture is the following:
Database (SQL Server) <=> RestFUL API <=> Front-end (HTML/Javscript/CSS)
For the front-end. you can use any JavaScript framework (e.g., AngularJS, Vue, React). For the 
back-end (RestFUL API), you should use ServiceStack (https://servicestack.net/)
Image that you are creating a web directory of restaurants. The web application should allow:

[X] List the existing restaurants.
[] Register a user. The required information is: Username, e-mail, password.
[X] Create a new restaurant. The required information is: Restaurant name, type (pizza, tacos, 
Italian, fast-food), address, and telephone. Only for authenticated users.
[X] Editing a selected restaurant. Only for authenticated users.
[X] Delete a restaurant. Only for authenticated users.
If it’s possible, implement version control with GitLab/GitHub

1 - Customer calls the call center of Rent-a-Car to book a car rental.

2 - Task: Employee of the call center records all kinds of data (name, type of car, etc.).

3 - Gateway: Optional step - If the customer is interested, another employee can include several types of insurance.

4 - Task: Until one week before the rental period starts, the customer can phone the call center again to change the booking (e.g., another type of car). Such a change can only be handled by a manager of the call center.
Gateway: Multiple subsequent changes are possible as long as they are initiated more than a week before the planned car hire.

5 - Task: When the customer arrives on the planned day, the "check-in" process is initiated. An employee of the rental office selects an appropriate car.

6 - Task: Another or the same employee checks the driver's license.

7 - Task: An employee charges the credit card.

8 - Gateway: Optional step - An employee of the rental office can add extra insurance.

9 - Based Gateway: If the customer does not show up on the planned date, the booking is canceled, and the credit card is charged anyway to compensate for all associated costs.

10 - After checking in, the selected car is supplied by an employee of the rental office, and the customer can start using it.

11 - If the customer returns the car on the planned date/time (or before), the "check-out" process is initiated by an employee of the rental office.

12 - Subsequently, an employee checks for damage and checks whether the car is filled up with fuel.

13 - If everything is OK, the process ends. If not, the credit card is charged for additional costs by an employee of the rental office.

14 -Based Gateway: If the car is not returned in time (i.e., too late or not at all), the check-out process is handled by a manager of the rental office. Based on her judgment appropriate actions are taken. This may result in charging the credit card.
