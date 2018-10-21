from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add', views.add, name='add'),
    url(r'^delete/(?P<todo_id>.*)$', views.delete, name='delete'),
    url(r'^complete/(?P<todo_id>.*)$', views.complete, name='complete')
]
