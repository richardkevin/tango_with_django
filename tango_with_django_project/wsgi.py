"""
WSGI config for tango_with_django_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""

from unipath import Path
import os
import sys


BASE_DIR = Path(__file__).parent.parent
if BASE_DIR not in sys.path:
    sys.path.append(BASE_DIR)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "tango_with_django_project.settings")

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
