# Intro

# [x] shell and syntax
# [x] executing files
# [x] variables
# [x] comments
# [ ] data types
# [ ] printing
# f string
# [ ] loops
# [ ] functions

# [ ] OOP

print('Hello, World!')

# var name = 'a string'
# const let
name = 'a string'

# this is a comment

# Primitive
string = 'this is a string'
numbers = 1.4
boolean = True  # False
tuple = ('simple stirng', 4)  # immutable

# objects -> dictionary
dictionary = {
    'key': 100,
    'another_key': 'name',
}
# array -> list
list = ['chirs', 'chirs', 'chirs']

# functions

# function function_name () {}


def name_of_function(some_val):  # parameter
    print('print something')
    print('some_val: ', some_val)  # arguments
    return 100


name_of_function('just a string')

# variable_to_save_return_info = name_of_function
# variable_to_save_return_info = name_of_function()

# print(variable_to_save_return_info)

# print(name_of_function())

# PPJ strawberry / grape


def make_a_sandwich(flavor):
    if flavor == 'strawberry':
        print('make a strawberry sandwich')
    elif flavor == 'grape':
        print('make a grape sandwich')
    elif flavor == 'vanilla':
        print('make a vanilla sandwich')
    else:
        print('not on the menu')


make_a_sandwich('chocolate')
