from django.shortcuts import HttpResponse, render


# Create your views here.
def root(request):
    print(request)
    return HttpResponse('Hello from test_app index method')
    # fetch some data from the db
    # pass the data to the template
    # name = 'Chris C'
    # context = {
    #     'user_name': name
    # }
    # return render(request, 'index.html', context)
