import React from 'react';
import {makeStyles} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {
    Button,
    TextField,
    Select,
    Input,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core"
import {useForm, Controller} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import {createSnippet} from "../actions/snippet";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
    },
    textField: {
        marginBottom: theme.spacing(2),
    },


}));

const languages = [
    'abap',
    'abnf',
    'actionscript',
    'ada',
    'agda',
    'al',
    'antlr4',
    'apacheconf',
    'apl',
    'applescript',
    'aql',
    'arduino',
    'arff',
    'asciidoc',
    'asm6502',
    'aspnet',
    'autohotkey',
    'autoit',
    'bash',
    'basic',
    'batch',
    'bbcode',
    'birb',
    'bison',
    'bnf',
    'brainfuck',
    'brightscript',
    'bro',
    'bsl',
    'c',
    'cil',
    'clike',
    'clojure',
    'cmake',
    'coffeescript',
    'concurnas',
    'cpp',
    'crystal',
    'csharp',
    'csp',
    'css-extras',
    'css',
    'cypher',
    'd',
    'dart',
    'dax',
    'dhall',
    'diff',
    'django',
    'dns-zone-file',
    'docker',
    'ebnf',
    'editorconfig',
    'eiffel',
    'ejs',
    'elixir',
    'elm',
    'erb',
    'erlang',
    'etlua',
    'excel-formula',
    'factor',
    'firestore-security-rules',
    'flow',
    'fortran',
    'fsharp',
    'ftl',
    'gcode',
    'gdscript',
    'gedcom',
    'gherkin',
    'git',
    'glsl',
    'gml',
    'go',
    'graphql',
    'groovy',
    'haml',
    'handlebars',
    'haskell',
    'haxe',
    'hcl',
    'hlsl',
    'hpkp',
    'hsts',
    'http',
    'ichigojam',
    'icon',
    'iecst',
    'ignore',
    'inform7',
    'ini',
    'io',
    'j',
    'java',
    'javadoc',
    'javadoclike',
    'javascript',
    'javastacktrace',
    'jolie',
    'jq',
    'js-extras',
    'js-templates',
    'jsdoc',
    'json',
    'json5',
    'jsonp',
    'jsstacktrace',
    'jsx',
    'julia',
    'keyman',
    'kotlin',
    'latex',
    'latte',
    'less',
    'lilypond',
    'liquid',
    'lisp',
    'livescript',
    'llvm',
    'lolcode',
    'lua',
    'makefile',
    'markdown',
    'markup-templating',
    'markup',
    'matlab',
    'mel',
    'mizar',
    'mongodb',
    'monkey',
    'moonscript',
    'n1ql',
    'n4js',
    'nand2tetris-hdl',
    'naniscript',
    'nasm',
    'neon',
    'nginx',
    'nim',
    'nix',
    'nsis',
    'objectivec',
    'ocaml',
    'opencl',
    'oz',
    'parigp',
    'parser',
    'pascal',
    'pascaligo',
    'pcaxis',
    'peoplecode',
    'perl',
    'php-extras',
    'php',
    'phpdoc',
    'plsql',
    'powerquery',
    'powershell',
    'processing',
    'prolog',
    'properties',
    'protobuf',
    'pug',
    'puppet',
    'pure',
    'purebasic',
    'purescript',
    'python',
    'q',
    'qml',
    'qore',
    'r',
    'racket',
    'reason',
    'regex',
    'renpy',
    'rest',
    'rip',
    'roboconf',
    'robotframework',
    'ruby',
    'rust',
    'sas',
    'sass',
    'scala',
    'scheme',
    'scss',
    'shell-session',
    'smali',
    'smalltalk',
    'smarty',
    'sml',
    'solidity',
    'solution-file',
    'soy',
    'sparql',
    'splunk-spl',
    'sqf',
    'sql',
    'stan',
    'stylus',
    'swift',
    't4-cs',
    't4-templating',
    't4-vb',
    'tap',
    'tcl',
    'textile',
    'toml',
    'tsx',
    'tt2',
    'turtle',
    'twig',
    'typescript',
    'typoscript',
    'unrealscript',
    'vala',
    'vbnet',
    'velocity',
    'verilog',
    'vhdl',
    'vim',
    'visual-basic',
    'warpscript',
    'wasm',
    'wiki',
    'xeora',
    'xml-doc',
    'xojo',
    'xquery',
    'yaml',
    'yang',
    'zig',
]

const snippetSchema = yup.object().shape({
    name: yup.string().required(),
    language: yup.mixed().oneOf(languages),
    description: yup.string().min(5).required(),
    code: yup.string().min(10).required(),
})

const AddSnippetForm = ({open, handleClose}) => {
    const dispatch = useDispatch()

    const {register, handleSubmit, control, errors, reset} = useForm({
        resolver: yupResolver(snippetSchema)
    })

    const onSubmit = (data) =>{  //data : name,language,description,code
        console.log(data)
        //dispatch create snippet action
        dispatch(createSnippet({data}))
        clearForm()

    }

    const clearForm = () => {
        reset();
        handleClose();
    }


    const classes = useStyles();
    return (
        <Dialog open={open} onClose={handleClose} >

            <DialogTitle>Create New Snippet</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Fill the form for create snippet
                </DialogContentText>


                <div className={classes.root}>
                    <form noValidate="off" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="name"
                            label="Name"
                            name="name"
                            placeholder="Name"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors.name ? true : false}
                            fullWidth
                        />

                        <Controller
                            as={
                                <Select
                                    input={<Input/>}
                                    className={classes.textField}
                                    fullWidth

                                >

                                    {
                                        languages.map((language, index) => (
                                            <MenuItem key={index} value={language}>
                                                {language}
                                            </MenuItem>
                                        ))
                                    }

                                </Select>
                            }
                            name="language"
                            label="Languages"
                            control={control}
                            error={errors.language ? true : false}
                            defaultValue={"javascript"}
                        />
                        <TextField
                            id="description"
                            label="Description"
                            name="description"
                            multiline
                            size="small"
                            rows={4}
                            className={classes.textField}
                            variant="outlined"
                            inputRef={register}
                            error={errors.description ? true : false}
                            fullWidth
                        />


                        <TextField
                            id="code"
                            label="Code"
                            name="code"
                            multiline
                            rows={10}
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors.code ? true : false}
                            fullWidth
                        />

                    </form>
                </div>
            </DialogContent>

            <DialogActions>
                <Button color="inherit" onClick={clearForm}>Cancel</Button>
                <Button type="submit" variant="outlined" color="primary" onClick={() => handleSubmit(onSubmit)()}>
                    Create Snippet
                </Button>
            </DialogActions>


        </Dialog>
    );
};

export default AddSnippetForm;