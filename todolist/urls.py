from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^todos/', include('todos.urls')), #include the todos url files
    # url(r'^$', include('todos.urls')), #match $ as / or home page and direct to todos/

]
