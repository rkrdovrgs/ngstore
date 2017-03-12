(function () { 
'use strict'; 
var __serviceId = 'ngcommerceModels'; 
angular.module('public').factory(__serviceId, __serviceImplementation); 
function __serviceImplementation() { 
 var __serviceInstance = {}; 
 
 __serviceInstance.ContactInformationDto = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "Location": null,
  "Id": 0,
  "Name": null,
  "LastName": null,
  "FullName": " ",
  "Address": null,
  "PointsOfReference": null,
  "PhoneNumber": null
}; 
if(model != undefined && model != null) { 
instanceOfT.Location = model.Location  || instanceOfT.Location; 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.Name = model.Name  || instanceOfT.Name; 
instanceOfT.LastName = model.LastName  || instanceOfT.LastName; 
instanceOfT.FullName = model.FullName  || instanceOfT.FullName; 
instanceOfT.Address = model.Address  || instanceOfT.Address; 
instanceOfT.PointsOfReference = model.PointsOfReference  || instanceOfT.PointsOfReference; 
instanceOfT.PhoneNumber = model.PhoneNumber  || instanceOfT.PhoneNumber; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.ShoppingCartDto = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "ShippingInformationId": 0
}; 
if(model != undefined && model != null) { 
instanceOfT.ShippingInformationId = model.ShippingInformationId  || instanceOfT.ShippingInformationId; 
}; 
 return instanceOfT; 
 }; 
 
 __serviceInstance.BasketDto = function (model, setDefaults) { 
 setDefaults = setDefaults !== false; 
 var instanceOfT = {
  "OptionValues": null,
  "Id": 0,
  "ProductId": 0,
  "Quantity": 0
}; 
if(setDefaults) instanceOfT.OptionValues = []; 
if(model != undefined && model != null) { 
instanceOfT.OptionValues = model.OptionValues  || instanceOfT.OptionValues; 
instanceOfT.Id = model.Id  || instanceOfT.Id; 
instanceOfT.ProductId = model.ProductId  || instanceOfT.ProductId; 
instanceOfT.Quantity = model.Quantity  || instanceOfT.Quantity; 
}; 
 return instanceOfT; 
 }; 
return __serviceInstance; 
 } 
 })();