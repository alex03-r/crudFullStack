using Mantenimiento;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<Datos.ApplicationDbContex>(optiones =>
{

    //builder.Configuration.GetConnectionString("defaultConection")

    optiones.UseSqlite("Data Source=mantenimiento.db");
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("MyCorsPolicy", builder =>
    {

        builder.WithOrigins("http://127.0.0.1:5173").AllowAnyHeader().AllowAnyMethod();

    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();


app.UseCors();
app.UseReuestHeaderMidelware();

app.MapControllers();

app.Run();
