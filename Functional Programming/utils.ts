export const compose = (...acc: ((...acc: any) => any)[]) => <T>(x: T) => acc.reduceRight((acc, fn) => fn(acc), x)