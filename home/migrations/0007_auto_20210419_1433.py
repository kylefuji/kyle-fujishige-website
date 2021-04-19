# Generated by Django 3.2 on 2021-04-19 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_alter_post_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='urls',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='type',
            field=models.CharField(choices=[('about-me', 'about me'), ('work-exp', 'work experience'), ('projects', 'projects'), ('home', 'home')], max_length=200),
        ),
    ]
