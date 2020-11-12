# Consider a program that determines whether people are tall
# enough to ride a roller coaster


# Given the following code that prompts the user for a
# day number (Remember that the int function converts a numeric string to a number)


# Prompt the user for a day of the week just like
# the previous problem. But this time, print "Go to work" if it's
# a work day and "Sleep in" if it's a weekend day. Example session:


# Prompt the user for a number in degrees Celsius,
# and convert the value to degrees in Fahrenheit and display it to the user.

# Use the following formula:
# F = (C * 9/5) + 32





# Write a program that accepts a number from a user.  
# Test the number to see if it is an even number or an odd number.  
# Print to the screen “This is an even number” or 
# “This is an odd number” based on the result.



# count = 0

# while count < 10:
#     count += 1
#     print(f"The count is {count}")

# print("Done with count")


# answer = ""

# while answer != "when":
#     answer = input("Say when: ")
#     answer = answer.lower()

# print("cheese")

num = ""
while num!= -1:
    num = int(input("Please enter a number: "))
    if num % 2 == 0:
        print("This is an even number")
    elif num == -1:
        print("exit")
    else:
        print("This is an odd number")