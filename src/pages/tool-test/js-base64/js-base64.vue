/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */ 


<template>
    <div>
        <tbody>
        <tr>
            <th width="50%">Text</th>
            <th>Base64</th>
        </tr>
        <tr>
            <th><textarea id="srctxt" cols="32" rows="4" onkeyup="encode()"></textarea></th>
            <th><textarea id="base64" cols="32" rows="4" onkeyup="decode()"></textarea></th>
        </tr>
        </tbody>
    </div>
</template>
<script>
    import {Base64} from 'js-base64';

    export default {
        name: '',
        data(){
            return {
                message: '',
            }
        },

        methods: {
            encode() {
                $('base64').value = Base64.encode($('srctxt').value);

            },

            decode() {
                $('srctxt').value = Base64.decode($('base64').value);
            }

        }
    }

    $ = function(id) {
        return document.getElementById(id)
    };
</script>

