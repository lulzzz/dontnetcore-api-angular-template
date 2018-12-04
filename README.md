## Create Initial Projects

Core        - .NET Core Class Library
API         - .NET Core Web Api
Test        - .Net Core MSTest
Database    - Database Project

## Add Swagger for API Documentation

1. Add the NuGet Package

dotnet add package Swashbuckle.AspNetCore

2. Setup in Startup.cs ConfigureServices

```c#
services.AddMvc();

services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
});
```

3. Setup in Startup.cs Configure
```c#
app.UseSwagger();

app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
});
```

4. Add Serilog for Console and SQL Logging

```
dotnet add package Serilog.AspNetCore
dotnet add package Serilog.Settings.Configuration
dotnet add package Serilog.Sinks.Console
dotnet add package Serilog.Sinks.MssqlServer
```

5. Delete Logging sections from Appsettings.json and Appsettings.development.json

6. Add Serilog Configuration to Appsettings.json

```json
"Serilog": {
    "MinimumLevel": "Information",
    "WriteTo": [
      {
        "Name": "MSSqlServer",
        "Args": {
          "connectionString": "Server=127.0.0.1;Database=Data;User Id=SERILOG;Password=password123;",
          "tableName": "Logs",
          "autoCreateSqlTable": false
        }
      },
      {
        "Name": "Console",
        "Args": {}
      }
    ]
```
7. Create SQL Table for Serilog (column names are case sensitive)

```sql

CREATE LOGIN [SERILOG] WITH PASSWORD = N'password', DEFAULT_LANGUAGE = [us_english];


CREATE TABLE [dbo].[Logs] (
    [ID]              INT            IDENTITY (1, 1) NOT NULL,
    [MESSAGE]         NVARCHAR (MAX) NULL,
    [MESSAGETEMPLATE] NVARCHAR (MAX) NULL,
    [LEVEL]           NVARCHAR (128) NULL,
    [TIMESTAMP]       DATETIME       NOT NULL,
    [EXCEPTION]       NVARCHAR (MAX) NULL,
    [PROPERTIES]      NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_LOGS] PRIMARY KEY CLUSTERED ([ID] ASC)
);


CREATE USER [SERILOG] FOR LOGIN [SERILOG];

GO
GRANT INSERT
    ON OBJECT::[dbo].[Logs] TO [SERILOG]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Logs] TO [SERILOG]
    AS [dbo];
    
```

8. Configure CORS in Startup.cs Configure

```c#
app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
```

https://github.com/domaindrivendev/Swashbuckle.AspNetCore

https://github.com/serilog/
http://hamidmosalla.com/2018/02/15/asp-net-core-2-logging-with-serilog-and-microsoft-sql-server-sink/

https://code-maze.com/net-core-web-development-part1/
https://code-maze.com/net-core-web-development-part2/
https://code-maze.com/net-core-web-development-part3/
https://code-maze.com/net-core-web-development-part4/

EntityBase

All items will have an Id and DateTimeCreated property, this will be inhe=rited from the EntityBase class. Additionally, overiding the ToString() fungtion to return a JSON formatted string makes reading test results easier.

dotnet add package NewtonSoft.Json

```c#
    public class EntityBase
    {
        public Guid Id { get; set; }

        public DateTime CreateDateTime { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }
    }
```

dotnet add package Dapper

## Creating the Angular Application
npm install -g @angular/cli@latest

cd C:\Git\dontnetcore-api-angular-template

ng new template --routing --directory web
