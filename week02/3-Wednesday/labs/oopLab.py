

# 1. Create an empty class called "Student"

# class Student:
#     def __init__(self, name):
#         self.name = name
#     def greeting(self):
#         return f"Good Morning {self.name}"

<<<<<<< HEAD
# # 2. Create 5 students objects (instances of the class "Student") of "Student" types


# Zach = Student("Zach")
# Powell = Student("Powell")
# Theresa = Student("Theresa")
# Nathan = Student("Nathan")
# Zena = Student("Zena")


# print(Zach.greeting())
# print(Powell.greeting())
# print(Theresa.greeting())
# print(Nathan.greeting())
# print(Zena.greeting())
=======
#2. Create 5 students objects (instances of the class "Student") of "Student" types
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7


#3a. Create a "greeting" method inside of the class "Student" class that 
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}" 


<<<<<<< HEAD
# class Student:
#     def greeting(self, name):
#         return f"Good morning {name}"

# 4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.

# print(Zach.greeting("Zach"))




# 5a. Create a constructor for the Student class.
# 5b. Create a print statement inside of the constructor
# 5c. Run your lab.py again and you should see a print statement for each student object
# That you created






# 6a. Pass in "name" as a parameter to your Student constructor.
# 6b. Create an instance variable for name
# 6c. Refactor your greeting method by removing the name parameter and
# adding a "self" in front of the printed "name" variable in the return statement
# 6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated
=======
#4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.

#5a. Create a constructor for the Student class. 
#5b. Create a print statement inside of the constructor
#5c. Run your lab.py again and you should see a print statement for each student object 
# That you created 


#6a. Pass in "name" as a parameter to your Student constructor. 
#6b. Create an instance variable for name
#6c. Refactor your greeting method by removing the name parameter and 
# adding a "self" in front of the printed "name" variable in the return statement 
#6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated 
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7

#7. Class Methods
#7a. Create a "Class" method inside of the "Student" called "campus" that returns the 
# Statement "Digital Crafts - Houston"
# Campus is a "Class" method so it should not have "self" as an argument. 
#7b. call the campus method by invoking Student.campus()
#7c. Call the campus method on each of the student objects 
#7d. Return the name of the student in the campus method (instance variable) (you should
# get an error)

#8. Class Variables 
#8a. Create a class variable inside of the Student class called "cohort" whose value is
# "June 2020 Cohort"
#8b. Print to the console each class variable for each of the student objects, i.e. 
# Michah.cohort 
#8c. Refactor your class method to print out the class variable when it is called 
#8d. Call the class method on the class (i.e. Student.campus())
#8e. Call the class method on each object (i.e. Dan.campus())

#9. Accessor Modifiers 
# Refactor your constructor to take a parameter for studentID
#9a. Create a new instance variable for studentID with the value _studentID
# Refactor the student objects to pass a studentID argument
#9b. Print the studentID value to the console
# Change the value of studentID to __studentID 
# Print the value to the console (you should get an error)


#. Inheritance 

# Create a new class called Car with the following method :
# CarDetails which prints "Here are details of this car"
# Create a new class called Hybrid that inherits from the Car class
<<<<<<< HEAD
#  with the following method: CarType which prints "I am a hybrid car"
# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car"
=======
#  with the following method: CarType which prints "I am a hybrid car" 


# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car" 

>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
# Create a Hybrid instance and an Electric instance
# Call the method CarType on the Hybrid Instance and Electric Instance 
# Call the method Car Details on each instance
<<<<<<< HEAD
=======



>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
# Add the following instance variables to the Car class :
# - make 
# - model 
# - color

class Car:
    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color
    def car_details(self):
        print(f"Here are the details on this car: It is a {self.make} {self.model} in {self.color}")


class Hybrid(Car):
    def car_type(self):
        print("I am a hybrid!")


class Electric(Car):
    def car_type(self):
        print("I am an electric car!")



prius = Hybrid("Toyota", "Camry", "Red")

civic = Electric("Honda", "Civic", "Green")

print(prius.make)
prius.car_type()
prius.car_details()

print(civic.make)
civic.car_type()
civic.car_details()












# Implicit Inheritance 

#. Override Explicitly

# Alter Before or After

# Super()

# COMPOSITION


<<<<<<< HEAD















# class Person:
#     def __init__(self, name, last_name, birthday, address, telephone, email):
#         self.name = name
#         self.last_name = last_name
#         self.birthday = birthday
#         self.address = address
#         self.telephone = telephone
#         self.email = email

#     jacob = Person("Jacob", "Deel", "12/19/1988", "Atlanta", "706-645-4420", "jacobldeel@yahoo.com")






# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
#     def greet(self, other_person):
#         print('Hello {}, I am {}!'.format(other_person.name, self.name))

# sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948') 
# jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

# sonny.greet(jordan)
# jordan.greet(sonny)

# print(f"Sonny's email is {sonny.email} and his phone number is {sonny.phone}.")
# print(f"Jordan's email is {jordan.email} and his phone number is {jordan.phone}.")
=======
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
