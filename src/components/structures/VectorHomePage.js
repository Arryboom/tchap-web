/*
Copyright 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

import React from 'react';
import HomePage from 'matrix-react-sdk/lib/components/structures/HomePage';
import sanitizeHtml from 'sanitize-html';
import { _t } from 'matrix-react-sdk/lib/languageHandler';

class VectorHomePage extends HomePage {
    static displayName = 'VectorHomePage';
    static replaces = 'HomePage';

    // we're overriding the base component here, for Riot-specific tweaks
    translate(s) {
        s = sanitizeHtml(_t(s));
        // ugly fix for https://github.com/vector-im/riot-web/issues/4243
        s = s.replace(/Tchap/, '<a href="https://www.tchap.gouv.fr" target="_blank" rel="noopener">Tchap</a>');
        return s;
    }
}

module.exports = VectorHomePage;
