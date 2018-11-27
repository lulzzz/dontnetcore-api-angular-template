
dotnet add package Swashbuckle.AspNetCore

services.AddMvc();

services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
});

app.UseSwagger();

app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
});

dotnet add package Serilog.AspNetCore
dotnet add package Serilog.Settings.Configuration
dotnet add package Serilog.Sinks.Console
dotnet add package Serilog.Sinks.MssqlServer

Configure CORS

https://github.com/domaindrivendev/Swashbuckle.AspNetCore

https://github.com/serilog/
http://hamidmosalla.com/2018/02/15/asp-net-core-2-logging-with-serilog-and-microsoft-sql-server-sink/

https://code-maze.com/net-core-web-development-part1/
https://code-maze.com/net-core-web-development-part2/
https://code-maze.com/net-core-web-development-part3/
https://code-maze.com/net-core-web-development-part4/
