# Generated by Django 3.2 on 2021-04-19 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_post_imageurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='type',
            field=models.CharField(choices=[('projects', 'projects'), ('work-exp', 'work experience'), ('about-me', 'about me'), ('home', 'home')], max_length=200),
        ),
    ]