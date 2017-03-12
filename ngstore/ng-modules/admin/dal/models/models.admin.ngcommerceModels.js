(function () { 
'use strict'; 
var __serviceId = 'ngcommerceModels'; 
angular.module('admin').factory(__serviceId, __serviceImplementation); 
function __serviceImplementation() { 
 var __serviceInstance = {}; 
 
 __serviceInstance.CategoryDetailsDto = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "Id": 0,
  "Name": null,
  "Code": null,
  "ParentId": null,
  "Subcategories": null
}; 
if(model != undefined && model != null) { 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.Name = model.Name  || instanceOfT.Name; 
instanceOfT.Code = model.Code  || instanceOfT.Code; 
instanceOfT.ParentId = model.ParentId  || instanceOfT.ParentId; 
instanceOfT.Subcategories = model.Subcategories  || instanceOfT.Subcategories; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.Category = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "HierarchyId": null,
  "HierarchyLevel": 0,
  "HierarchyName": null,
  "Parent": null,
  "Products": null,
  "Id": 0,
  "Code": null,
  "Name": null,
  "ParentId": null
}; 
if(setDefaults) instanceOfT.Parent = new __serviceInstance.Parent(); 
if(setDefaults) instanceOfT.Products = []; 
if(model != undefined && model != null) { 
instanceOfT.HierarchyId = model.HierarchyId  || instanceOfT.HierarchyId; 
instanceOfT.HierarchyLevel = model.HierarchyLevel  || instanceOfT.HierarchyLevel; 
instanceOfT.HierarchyName = model.HierarchyName  || instanceOfT.HierarchyName; 
instanceOfT.Parent = model.Parent  || instanceOfT.Parent; 
instanceOfT.Products = model.Products  || instanceOfT.Products; 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.Code = model.Code  || instanceOfT.Code; 
instanceOfT.Name = model.Name  || instanceOfT.Name; 
instanceOfT.ParentId = model.ParentId  || instanceOfT.ParentId; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.Product = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "DefaultImage": null,
  "Images": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "LastUpdatedDate": "0001-01-01T00:00:00",
  "ManufacturerId": 0,
  "Manufacturer": null,
  "Categories": null,
  "Attributes": null,
  "Id": 0,
  "Name": null,
  "Description": null,
  "Price": null,
  "DefaultImageId": null
}; 
if(setDefaults) instanceOfT.Images = []; 
if(setDefaults) instanceOfT.Manufacturer = new __serviceInstance.Manufacturer(); 
if(setDefaults) instanceOfT.Categories = []; 
if(setDefaults) instanceOfT.Attributes = []; 
if(model != undefined && model != null) { 
instanceOfT.DefaultImage = model.DefaultImage  || instanceOfT.DefaultImage; 
instanceOfT.Images = model.Images  || instanceOfT.Images; 
instanceOfT.CreatedDate = model.CreatedDate  || instanceOfT.CreatedDate; 
instanceOfT.LastUpdatedDate = model.LastUpdatedDate  || instanceOfT.LastUpdatedDate; 
instanceOfT.ManufacturerId = model.ManufacturerId  || instanceOfT.ManufacturerId; 
instanceOfT.Manufacturer = model.Manufacturer  || instanceOfT.Manufacturer; 
instanceOfT.Categories = model.Categories  || instanceOfT.Categories; 
instanceOfT.Attributes = model.Attributes  || instanceOfT.Attributes; 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.Name = model.Name  || instanceOfT.Name; 
instanceOfT.Description = model.Description  || instanceOfT.Description; 
instanceOfT.Price = model.Price  || instanceOfT.Price; 
instanceOfT.DefaultImageId = model.DefaultImageId  || instanceOfT.DefaultImageId; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.ProductDetailsDto = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "Images": [],
  "Manufacturer": null,
  "Categories": [],
  "Attributes": [],
  "Id": 0,
  "Name": null,
  "Description": null,
  "Price": null,
  "DefaultImageId": null
}; 
if(setDefaults) instanceOfT.Images = []; 
if(setDefaults) instanceOfT.Categories = []; 
if(setDefaults) instanceOfT.Attributes = []; 
if(model != undefined && model != null) { 
instanceOfT.Images = model.Images  || instanceOfT.Images; 
instanceOfT.Manufacturer = model.Manufacturer  || instanceOfT.Manufacturer; 
instanceOfT.Categories = model.Categories  || instanceOfT.Categories; 
instanceOfT.Attributes = model.Attributes  || instanceOfT.Attributes; 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.Name = model.Name  || instanceOfT.Name; 
instanceOfT.Description = model.Description  || instanceOfT.Description; 
instanceOfT.Price = model.Price  || instanceOfT.Price; 
instanceOfT.DefaultImageId = model.DefaultImageId  || instanceOfT.DefaultImageId; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.ProductAttributeDto = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "Id": 0,
  "OptionValues": null,
  "Price": null,
  "Stock": 0
}; 
if(setDefaults) instanceOfT.OptionValues = []; 
if(model != undefined && model != null) { 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.OptionValues = model.OptionValues  || instanceOfT.OptionValues; 
instanceOfT.Price = model.Price  || instanceOfT.Price; 
instanceOfT.Stock = model.Stock  || instanceOfT.Stock; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.Manufacturer = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "Id": 0,
  "Name": null,
  "Url": null
}; 
if(model != undefined && model != null) { 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.Name = model.Name  || instanceOfT.Name; 
instanceOfT.Url = model.Url  || instanceOfT.Url; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.StatusHistory = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "Id": 0,
  "Date": "0001-01-01T00:00:00",
  "Comment": null,
  "StatusId": 0,
  "Status": null,
  "OrderId": 0,
  "Order": null
}; 
if(model != undefined && model != null) { 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.Date = model.Date  || instanceOfT.Date; 
instanceOfT.Comment = model.Comment  || instanceOfT.Comment; 
instanceOfT.StatusId = model.StatusId  || instanceOfT.StatusId; 
instanceOfT.Status = model.Status  || instanceOfT.Status; 
instanceOfT.OrderId = model.OrderId  || instanceOfT.OrderId; 
instanceOfT.Order = model.Order  || instanceOfT.Order; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.BankAccount = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "Id": 0,
  "BankName": null,
  "AccountNumber": null,
  "Beneficiary": null,
  "Active": false
}; 
if(model != undefined && model != null) { 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.BankName = model.BankName  || instanceOfT.BankName; 
instanceOfT.AccountNumber = model.AccountNumber  || instanceOfT.AccountNumber; 
instanceOfT.Beneficiary = model.Beneficiary  || instanceOfT.Beneficiary; 
instanceOfT.Active = model.Active  || instanceOfT.Active; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.FileDto = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "Id": 0,
  "Alias": null,
  "Url": "/File/0/"
}; 
if(model != undefined && model != null) { 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.Alias = model.Alias  || instanceOfT.Alias; 
instanceOfT.Url = model.Url  || instanceOfT.Url; 
}; 
 return instanceOfT; 
 }; 
return __serviceInstance; 
 } 
 })();