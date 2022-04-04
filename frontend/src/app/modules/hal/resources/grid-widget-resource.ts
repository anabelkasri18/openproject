//-- copyright
// OpenProject is an open source project management software.
// Copyright (C) 2012-2020 the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See docs/COPYRIGHT.rdoc for more details.
//++

import {HalResource} from 'core-app/modules/hal/resources/hal-resource';
import {GridResource} from "core-app/modules/hal/resources/grid-resource";
import {Attachable} from "core-app/modules/hal/resources/mixins/attachable-mixin";
import {AttachmentCollectionResource} from "core-app/modules/hal/resources/attachment-collection-resource";
import {UploadFile} from "core-components/api/op-file-upload/op-file-upload.service";

export class GridWidgetResource extends HalResource {
  public identifier:string;
  public startRow:number;
  public endRow:number;
  public startColumn:number;
  public endColumn:number;

  public options:{[key:string]:unknown};

  public get height() {
    return this.endRow - this.startRow;
  }

  public get width() {
    return this.endColumn - this.startColumn;
  }

  public grid:GridResource;
}