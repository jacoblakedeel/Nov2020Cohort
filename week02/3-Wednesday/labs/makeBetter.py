# from textwrap import dedent
# d = {
#     "Levi": "832-291-7066",
#     "Tracy": "541-990-0760",
#     "Skittles": "666-666-6666"
# }


# def phonebook(d):
#     print("Electronic Phone Book")
#     print("=" * 21)
#     print(dedent("""
#     1. Look up an entry
#     2. Set an entry
#     3. Delete an entry
#     4. List all entrys
#     5. Quit
#     """))
    
# def choice_one(name):
#     if name in d:
#             print(d[name])
#     else:
#         print(f"{name} not found")
#     phonebook(d)

# def choice_two(name, number):
#     d[name] = number
#     print(f"Entry stored for {name} and {number}")
#     phonebook(d)


# def choice_three(name):
#     del d[name]
#     input(f"Deleted entry for {name}")
#     phonebook(d)




# while True:
#     choice = input("What do you want to do (1-5)? ")
#     if choice == "1":
#         name = input("Name: ")
#         choice_one(name)
#     elif choice == "2":
#         name = input("Name: ")
#         number = input("Number: ")
#         choice_two(name, number)
#     elif choice == "3":
#         name = input("Name: ")
#         choice_three(name)
#     elif choice == "4":
#         list_of_contacts = d.items()
#         print(list_of_contacts)
#     elif choice == "5":
#         print("Bye!")
#         break
#     else:
#         print("Please enter a valid command")
#         phonebook(d)
    

# phonebook(d)
