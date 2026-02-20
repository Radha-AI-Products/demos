using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Syncfusion.Licensing;
using Syncfusion.Blazor;
using TradeStack;

// Register Syncfusion license key
var syncfusionLicenseKey = "";

if (!string.IsNullOrEmpty(syncfusionLicenseKey))
{
    try
    {
        SyncfusionLicenseProvider.RegisterLicense(syncfusionLicenseKey);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Failed to register Syncfusion license: {ex.Message}");
    }
}
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// Add Syncfusion Blazor services
builder.Services.AddScoped<Syncfusion.Blazor.Popups.SfDialogService>();
builder.Services.AddSyncfusionBlazor();

await builder.Build().RunAsync();
