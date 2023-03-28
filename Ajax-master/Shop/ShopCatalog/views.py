from django.shortcuts import render
from .models import *
from django.http import JsonResponse

# Create your views here.
def show_catalog(request):
    

    all_categories = Category.objects.all()
    all_transports = Transport.objects.all()
    context = {'all_categories': all_categories, 'all_transports': all_transports}
    
    return render(request, 'index.html', context=context) 
# Создание функции get_category, для получения категории
def get_category(request):
    # Получение нужной ктаегории
    category = request.GET.get('category')
    # Фильтрация транспорта по определённой категории
    filter_transport = Transport.objects.filter(category__name = category).values()
    # Преобразование отфильтрованных объектов в список
    filter_transport = list(filter_transport)
    # Возврат с помощью Json
    return JsonResponse({'filtered_transport' : filter_transport})