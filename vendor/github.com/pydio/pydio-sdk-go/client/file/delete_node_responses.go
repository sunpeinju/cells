// Code generated by go-swagger; DO NOT EDIT.

package file

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/pydio/pydio-sdk-go/models"
)

// DeleteNodeReader is a Reader for the DeleteNode structure.
type DeleteNodeReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteNodeReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {

	case 200:
		result := NewDeleteNodeOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewDeleteNodeOK creates a DeleteNodeOK with default headers values
func NewDeleteNodeOK() *DeleteNodeOK {
	return &DeleteNodeOK{}
}

/*DeleteNodeOK handles this case with default header values.

Successful response
*/
type DeleteNodeOK struct {
	Payload *models.PydioResponse
}

func (o *DeleteNodeOK) Error() string {
	return fmt.Sprintf("[DELETE /fs/{path}][%d] deleteNodeOK  %+v", 200, o.Payload)
}

func (o *DeleteNodeOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.PydioResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
