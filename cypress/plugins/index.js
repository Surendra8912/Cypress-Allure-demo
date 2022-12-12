// <reference types=”@shelex/cypress-allure-plugin” />

/// <reference types="@shelex/cypress-allure-plugin" />

//import allureWriter from '@shelex/cypress-allure-plugin/writer';
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default (on, config) => {

allureWriter(on, config); return config; };