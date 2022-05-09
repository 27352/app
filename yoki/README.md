# Yōki - ようき
## _Yōki is an event driven Container of Data_
Yōki can be used as a data layer or anywhere your project requires a container for event sources and data.

> A container is a class or a data structure whose instances are collections of other objects. In other words, they store objects in an organized way that follows specific access rules. [1](https://en.wikipedia.org/wiki/Container_(abstract_data_type))

Components can subscribe to the data updates to trigger other actions within your app.

Yōki ensures flexibility, portability and ease of implementation.

## Features
- Subscribe to events and data
- Easily send updates with one method call
- Retrieve aggregate snapshots of data
- Retrieve the event store

## Usage

### Subscribe to events
For example:
```javascript
yoki.on('pageView', data => {
    // do sth with the data
});
```

### Send events and data
Send an event update with your data payload
```javascript
yoki.update('pageView', {
    path: '/home'
});
```
## Yōki Methods
Subscribes to the specific event name.
```javascript
on(name: string, fn: Function): void;
```
Removes the listener.
```javascript
off(fn: Function): void;
```
Sends a data update using the event name and data payload.
```javascript
update(eventName: string, eventData: IDictionary): void;
```
Retrieves the collection of data.
```javascript
snapshot(): IDictionary;
```
Clears the event store and data.
```javascript
clear(): void;
```

## Release
