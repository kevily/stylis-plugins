import type stylis from 'stylis'

export interface optionsType {
    namespace: string
}
export default function classNamespace(options: optionsType): stylis.Middleware {
    return (context, _, selectors) => {
        if (!options?.namespace) return
        if (context.type !== 'rule') return
        if (context.line !== 1 || context.parent) return
        const [rootSelector] = selectors
        const rootClass = Array.isArray(rootSelector.props)
            ? rootSelector.props[0]
            : rootSelector.props
        if (!/^\..*\x20$/.test(options.namespace)) return
        const namespace = options.namespace.replace(/&/g, rootClass)
        selectors?.forEach(selector => {
            if (Array.isArray(selector.props)) {
                selector.props = selector.props.map(prop => {
                    return `${namespace}${prop}`
                })
            } else {
                selector.props = `${namespace}${selector.props}`
            }
        })
    }
}
