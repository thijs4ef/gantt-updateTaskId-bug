import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import {
  GanttComponent,
  EditDialogFieldsDirective,
  DayMarkers,
  EditDialogFieldDirective,
  Inject,
  Edit,
  Selection,
  Toolbar,
  ColumnsDirective,
  ColumnDirective,
  EventMarkersDirective,
  EventMarkerDirective
} from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { editingData, editingResources } from './data';
import { SampleBase } from './sample-base';
export class Editing extends SampleBase {
  constructor() {
    super(...arguments);
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      //dependency: 'Predecessor',
      child: 'subtasks',
      notes: 'info',
      resourceInfo: 'resources'
    };
    this.resourceFields = {
      id: 'resourceId',
      name: 'resourceName'
    };
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.splitterSettings = {
      columnIndex: 2
    };
    this.projectStartDate = new Date('03/25/2019');
    this.projectEndDate = new Date('07/28/2019');
    this.gridLines = 'Both';
    this.toolbar = [
      'Add',
      'Edit',
      'Update',
      'Delete',
      'Cancel',
      'ExpandAll',
      'CollapseAll',
      'Indent',
      'Outdent'
    ];
    this.timelineSettings = {
      topTier: {
        unit: 'Week',
        format: 'MMM dd, y'
      },
      bottomTier: {
        unit: 'Day'
      }
    };
    this.labelSettings = {
      leftLabel: 'TaskName',
      rightLabel: 'resources'
    };
    this.eventMarkerDay1 = new Date('4/17/2019');
    this.eventMarkerDay2 = new Date('5/3/2019');
    this.eventMarkerDay3 = new Date('6/7/2019');
    this.eventMarkerDay4 = new Date('7/16/2019');
  }

  render() {
    return (
      <>
        <ButtonComponent
          onClick={() => {
            this.ganttInstance.updateTaskId(1, 900);
          }}
        >
          {' '}
          Make the gantt crash task 1{' '}
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            this.ganttInstance.updateTaskId(2, 800);
          }}
        >
          {' '}
          Make the gantt crash task 2{' '}
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            this.ganttInstance.updateTaskId(3, 700);
          }}
        >
          {' '}
          Make the gantt crash task 3{' '}
        </ButtonComponent>
        <div className="control-pane">
          <div className="control-section">
            <GanttComponent
              ref={gantt => (this.ganttInstance = gantt)}
              id="Editing"
              taskMode="Manual"
              dataSource={editingData}
              dateFormat={'MMM dd, y'}
              treeColumnIndex={1}
              allowSelection={true}
              showColumnMenu={false}
              allowFiltering={false}
              highlightWeekends={true}
              enablePredecessorValidation={false}
              validateManualTasksOnLinking={false}
              allowUnscheduledTasks={true}
              projectStartDate={this.projectStartDate}
              projectEndDate={this.projectEndDate}
              taskFields={this.taskFields}
              timelineSettings={this.timelineSettings}
              labelSettings={this.labelSettings}
              splitterSettings={this.splitterSettings}
              height="410px"
              editSettings={this.editSettings}
              gridLines={this.gridLines}
              toolbar={this.toolbar}
              resourceFields={this.resourceFields}
              resources={editingResources}
            >
              <ColumnsDirective>
                <ColumnDirective field="TaskID" width="60" />
                <ColumnDirective
                  field="TaskName"
                  headerText="Job Name"
                  width="250"
                  clipMode="EllipsisWithTooltip"
                />
                <ColumnDirective field="StartDate" />
                <ColumnDirective field="Duration" />
                <ColumnDirective field="Progress" />
                <ColumnDirective field="Predecessor" />
              </ColumnsDirective>
              <EditDialogFieldsDirective>
                <EditDialogFieldDirective type="General" headerText="General" />
                <EditDialogFieldDirective type="Dependency" />
                <EditDialogFieldDirective type="Resources" />
                <EditDialogFieldDirective type="Notes" />
              </EditDialogFieldsDirective>
              <EventMarkersDirective>
                <EventMarkerDirective
                  day={this.eventMarkerDay1}
                  label="Project approval and kick-off"
                />
                <EventMarkerDirective
                  day={this.eventMarkerDay2}
                  label="Foundation inspection"
                />
                <EventMarkerDirective
                  day={this.eventMarkerDay3}
                  label="Site manager inspection"
                />
                <EventMarkerDirective
                  day={this.eventMarkerDay4}
                  label="Property handover and sign-off"
                />
              </EventMarkersDirective>
              <Inject services={[Edit, Selection, Toolbar, DayMarkers]} />
            </GanttComponent>
            <div style={{ float: 'right', margin: '10px' }}>
              Source:
              <a
                href="https://en.wikipedia.org/wiki/Construction"
                target="_blank"
              >
                https://en.wikipedia.org/
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

render(<Editing />, document.getElementById('sample'));
