# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.http import HttpResponse

# import our model Todo
from .models import Todo

def index(request):
    # display todo items
    todos = Todo.objects.all()
    context = {
        'todos': todos
    }
    return render(request, 'index.html', context)

def add(request):
    # Check if it's a post request or get request
    if(request.method == 'POST'):
        title = request.POST['title']
        text = request.POST['text']

        todo = Todo(title=title, text=text)
        todo.save()

        # redirect back to index.html
        return redirect('/todos')
    else:
        return render(request, 'add.html')

def delete(request, todo_id):
    query = Todo.objects.get(id=todo_id)
    query.delete()
    return redirect('/todos')
