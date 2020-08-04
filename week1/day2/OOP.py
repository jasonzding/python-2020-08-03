# What is OOP? Object Oriented Programming

# What is an object?
# attributes/values, call later, some data, collectin of data and methods that work on the data

# Why use an object?
# group some logic or informaiton together

# Why use OOP?

# DRY - Don't Repeat Yourself

# Person variables
vik_first = 'Vikram'
vik_last = 'K'

amy_first = 'Amy'
amy_last = 'P'

# Person object
anthony = {
    'first_name': 'Anthony',
    'last_name': 'A',
    'age': 21
}
# print(anthony['age'])
aleks = {
    'first_name': 'Aleks',
    'last_name': 'Y',
    'age': 22
}

# DRY - Don't Repeat Yourself

# Class
# blueprint
# Person


class Person:
    def __init__(self, first_name_p, last_name_p, age_p=0, ss_p='', location_p='', hobbies_p=[]):
        self.first_name = first_name_p
        self.last_name = last_name_p
        self.age = age_p
        self.ss = ss_p
        self.location = location_p
        self.hobbies = hobbies_p


britt = Person('Britt', 'R', ss_p='1234567890')
# print(britt.ss)
# britt.ss = '1234567890'
# print(britt.hobby)

# for attribute in dir(britt):
#     print(attribute)

james = Person('James', 'H', 21)
# print(james)

# Hobby


class Hobby:
    def __init__(self, name, time_spent, equipment, local_group):
        self.name = name
        self.time_spent = time_spent
        self.equipment = equipment
        self.local_group = local_group


rc = Hobby('RC', '20 years', ['engine', 'remote',
                              'batteries'], "Lake Steven\'s RC Club")
# print(rc.equipment)

jason = Person('Jason', 'D', 21, hobbies_p=[rc])
print(jason.hobbies[0].name)
