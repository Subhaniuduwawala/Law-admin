﻿using System.Configuration;
using System.Data;
using System.Windows;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Law_Admin_dekstop
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            DatabaseFacade facade = new DatabaseFacade(new UserDataContext());
            facade.EnsureCreated();
        }


    }

}
