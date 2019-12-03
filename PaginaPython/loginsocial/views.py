from django.shortcuts import render


 

def Inicio(request):
    return render(request, 'loginsocial/Inicio.html',{})

# Create your views here.
