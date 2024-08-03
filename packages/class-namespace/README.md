# stylis-plugins-class-namespace

## Intro

> To add a namespace to the project "className" using the provided "namespace".

## Install

```shell
npm i stylis-plugins-class-namespace
```

## Use

> import classNamespacePlugin from 'stylis-plugins-class-namespace'

### Before

```css
.class {
    color: #fff;
}
```

### classNamespacePlugin({ namespace: '&' })

```css
.class.class {
    color: #fff;
}
```

### classNamespacePlugin({ namespace: '.namespace' })

```css
.namespace.class {
    color: #fff;
}
```

### classNamespacePlugin({ namespace: '.namespace ' })

```css
.namespace .class {
    color: #fff;
}
```
