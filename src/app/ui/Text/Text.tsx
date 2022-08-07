import React from "react"
import classNames from "classnames"
import styles from "./Text.module.scss"
import CSS from "csstype"

export type TextColor =
    | "ocean-blue"
    | "sea-blue"
    | "red"
    | "grassy-green"
    | "yellow"
    | "warm-grey"
    | "dove-grey"
    | "orange"
    | "black"
    | "cinnabar"
    | "salmon"
    | "elf-green"
    | "green-leaf"
    | "light-black"
    | "white"
    | "lighter-grey"

export interface TextProps {
    className?: string
    style?: CSS.Properties
    color?: TextColor
    fs?: string
    lineHeight?: number
    light?: boolean
    dark?: boolean
    semibold?: boolean
    error?: boolean
    errorVisible?: boolean
    limitedWidth?: boolean | string
    uppercase?: boolean
    width?: number
    "data-cy"?: string
    letterSpacing?: number
    noWrap?: boolean
    limitLines?: number
    hex?: string
    children: React.ReactNode
}

export const Text: React.FC<TextProps> = (props) => {
    const {
        className,
        style,
        color,
        lineHeight,
        light,
        dark,
        error,
        errorVisible,
        limitedWidth,
        semibold,
        fs,
        uppercase,
        width,
        letterSpacing,
        noWrap,
        limitLines,
        hex,
    } = props

    const resultStyle: CSS.Properties = {
        color: hex,
        maxWidth: typeof limitedWidth === "string" ? limitedWidth : undefined,
        ...style,
        lineHeight: `${lineHeight}rem`,
        width: `${width}rem`,
        letterSpacing: `${letterSpacing}rem`,
        WebkitLineClamp: limitedWidth && limitLines ? limitLines : undefined,
        fontSize: fs || undefined,
    }
    console.log({color})
    return (
        <span
            style={resultStyle}
            className={classNames(styles["text-component"], className, {
                [styles[`-${color}`]]: color,
                [styles.light]: light,
                [styles.dark]: dark,
                [styles.errorText]: error,
                [styles.visible]: errorVisible,
                [styles.overflow]: limitedWidth,
                [styles.noWrap]: typeof limitedWidth === "boolean" || noWrap,
                [styles.semibold]: semibold,
                [styles.uppercase]: uppercase,
                [styles.limitLines]: limitLines && limitedWidth,
            })}
        >
            {props.children}
        </span>
    )
}
