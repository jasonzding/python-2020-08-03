# User
class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        # self.account_balance = 0
        self.account = BankAccount(int_rate=0.02, balance=0)  # added this line
        self.accounts = []

    def make_deposit(self, amount):
        # def make_deposit(self, amount, name):
        # hmmm...the User class doesn't have an account_balance attribute anymore
        self.account.deposit(amount)
        # loop through accounts
        # if account.name == name
        # make the deposit
        return self

    def make_withdrawl(self, amount):
        # hmmm...the User class doesn't have an account_balance attribute anymore
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        self.account.display_account_info()

    def open_new_account(self, name, start_balance):
        # create a new account
        # add it the self.accounts
        pass
# ****************************************************************

# Bank Account


class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0.01, balance=0):
        # your code here! (remember, this is where we specify the attributes for our class)
        # don't worry about user info here; we'll involve the User class soon
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        # your code here
        print(f'Depositing {amount}')
        self.balance += amount
        return self

    def withdraw(self, amount):
        # your code here
        print(f'Withdrawing {amount}')
        self.balance -= amount
        # if type checking
        # if type savings

    def display_account_info(self):
        # your code here
        print(f"Your current balance is {self.balance}")
        return self

    def yield_interest(self):
        # your code here
        self.balance = self.balance + (self.balance * self.int_rate)

# ****************************************************************


james = User('James', 'abc@d.com')
# james.account.display_account_info()
# james.account.deposit(10)
# james.account.display_account_info()
# james.account.yield_interest()
# james.account.display_account_info()

james.account.display_account_info()
james.make_deposit(99)
james.account.display_account_info()
james.make_withdrawl(11)
james.account.withdraw(20)
james.display_user_balance()
